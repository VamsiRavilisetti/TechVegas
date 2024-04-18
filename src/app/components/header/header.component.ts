import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
export interface User {
  name: string;
  id: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  myControl = new FormControl<string | User>('');
  options: User[] = [];
  filteredOptions!: Observable<User[]>;
  products: any = [];
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(this.products)
        this.products.forEach((element: any) => {
          this.options.push({ name: element.title, id: element.id })
        });
      }, (err) => { console.log("Error!: ", err); }
    )

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
