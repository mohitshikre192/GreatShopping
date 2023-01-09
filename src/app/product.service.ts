import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(protected http: HttpClient) { }
  private serveURL: string = "https://greatshoppingfunction.azurewebsites.net";
  public getFeaturedP() {
    console.log('inside BrandService getBrands');
    var functionUrl = "https://greatshoppingfunction.azurewebsites.net/api/GetAllFeaturedProduct";
    // var functionUrl = "https://az-meta-data-function.azurewebsites.net/api/GetAllBrand?code=xjatBH02NC7C-i8_QndeQPkiIM1XMWuQUYIymXrhwcLPAzFu4Y4a1w==";
    return this.http.get<Product[]>(functionUrl).pipe(catchError(this.handleError));

  }

  public getBrandP(Brandid: string) {
    var functionUrl = "https://greatshoppingfunction.azurewebsites.net/api/brandid/" + Brandid;
    return this.http.get<Product>(functionUrl).pipe(catchError(this.handleError));


  }
  public getProductD(productid: string) {
    let functionUrl: string = "https://greatshoppingfunction.azurewebsites.net/api/productid/" + productid;
    return this.http.get<Product>(functionUrl).pipe(catchError(this.handleError));


  }




  private handleError(error: HttpErrorResponse) {

    let errorMsg: string = "";
    if (error.error instanceof ErrorEvent) {
      // Client Error
      errorMsg = "Error: $error.error.message"
    }
    else {
      // Server Error
      errorMsg = "Status: $(error.status) \n Message: error.message"
    }
    return throwError(errorMsg);
  }
}
