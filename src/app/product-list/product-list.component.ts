import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public loading: boolean = false;
  public Brandid: string = "";
 Bproducts: any;
  public errorMessage: string | null = null;
  private sub: any;
  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.Brandid = params['Brandid'];
    })


    {
      // console.log('inside BrandlistComponent ngOnInit - Before function call');

      this.productService.getBrandP(this.Brandid).subscribe(result => {
        this.Bproducts = result;
      });
    }
  }
}
   
  






