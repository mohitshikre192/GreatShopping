import { Component, OnInit } from '@angular/core';
import { Brand } from '../brand';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
  providers: [BrandService]
})
export class BrandListComponent implements OnInit {
 brands: Brand[]=[];
  constructor(private brandService: BrandService) {

    console.log('inside BrandlistComponent constructor');}

  ngOnInit(): void {
    console.log('inside BrandlistComponent ngOnInit - Before function call');
    //this.brands = this.brandService.getBrands();
    this.brandService.getBrands().subscribe(result => {
      this.brands = result;
    })
    console.log('inside BrandlistComponent ngOnInit - After function call');
  }

}
