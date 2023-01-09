import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {



  public productid: string = "";
  Dproducts: any;
  public errorMessage: string | null = null;
  private sub: any;
  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.productid = params['productid'];
    })


    {
      // console.log('inside BrandlistComponent ngOnInit - Before function call');

      this.productService.getProductD(this.productid).subscribe(result => {
        this.Dproducts = result;
      });
    }
  }
}
