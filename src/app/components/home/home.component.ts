import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: any;
  products: any
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getCategories().subscribe(
      (data) => {
        this.categories = data;

      }, (err) => { console.log("Error!: ", err); }
    )

    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      }, (err) => { console.log("Error!: ", err); }
    )
  }
  getProductByCategory(category: string) {
    this.productService.getProductsByCategory(category).subscribe(
      (data) => {
        this.products = data;
      }, (err) => { console.log("Error!: ", err); }
    )
  }
}
