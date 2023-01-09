import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-featured-list',
  templateUrl: './product-featured-list.component.html',
  styleUrls: ['./product-featured-list.component.css']
})
export class ProductFeaturedListComponent implements OnInit {


  Fproducts: Product[] = [];
  constructor(private productService: ProductService) {

    console.log('inside BrandlistComponent constructor');
  }
  ngOnInit(): void {
    console.log('inside BrandlistComponent ngOnInit - Before function call');
    //this.brands = this.productService.getBrands();
    this.productService.getFeaturedP().subscribe(result => {
      this.Fproducts = result;
    })
    console.log('inside BrandlistComponent ngOnInit - After function call');

  }

}
