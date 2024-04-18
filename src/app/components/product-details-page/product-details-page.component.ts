import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {
  productDetails: any
  constructor(private productService: ProductService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductDetails(id).subscribe(
      (data) => {
        this.productDetails = data;
        console.log(this.productDetails)
      }, (err) => { console.log("Error!: ", err); }
    )
  }

}
