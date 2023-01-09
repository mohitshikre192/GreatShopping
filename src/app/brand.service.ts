import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Brand } from './brand';

// error handling
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(protected http: HttpClient) { }

  public getBrands(){
    console.log('inside BrandService getBrands');
    var functionUrl = "https://greatshoppingfunction.azurewebsites.net/api/GetAllBrand";
   // var functionUrl = "https://az-meta-data-function.azurewebsites.net/api/GetAllBrand?code=xjatBH02NC7C-i8_QndeQPkiIM1XMWuQUYIymXrhwcLPAzFu4Y4a1w==";
    return this.http.get<Brand[]>(functionUrl).pipe(catchError(this.handleError));

  }
  //private handleError<Brand>(operation = 'operation', result?: Brand) {
  //  return (error: any): Observable<Brand> => {

  //    // TODO: send the error to remote logging infrastructure
  //    console.error(error); // log to console instead

  //    // TODO: better job of transforming error for user consumption
  //    console.log(`${operation} failed: ${error.message}`);

  //    // Let the app keep running by returning an empty result.
  //    return of(result as Brand);
  //  };
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
  

  //getBrandListLocally(): Brand[] {
  //  console.log('inside BrandService getBrandListLocally');
  //  let brandslist: Brand[] = [
  //    { id: 1, brandName: "Samsung",brand_Descript: "basic description" },
  //    { id: 2, brandName: "Infinix", brand_Descript: "basic description" },
  //    { id: 3, brandName: "Moto", brand_Descript: "basic description" }
  //  ]
  //  return brandslist;
  //}
}
