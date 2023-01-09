import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  error(error: any) {
      throw new Error("Method not implemented.");
  }
  readonly getlogin = "https://greatshoppingfunction.azurewebsites.net/api/Userlogin?";
  constructor(private http:HttpClient) { }
  public createCustomer(customer: Customer): Observable<Customer> {
    //let functionUrl: string = this.baseUrl + 'api/createCustomer/';
    let functionUrl: string = 'https://prod-40.eastus.logic.azure.com:443/workflows/00c24027a7e84866bc4cdb3551067ef8/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=u7WvX6uuVNAH8Ir_cGDw87l28-O-RUGA2kRlvpYCj1M';
    console.log('Inside Service');
    console.log(customer);
    return this.http.post<Customer>(functionUrl, customer).pipe(catchError(this.handleError));
  }

 public register(user: any) {
    let functionUrl: string = 'https://prod-40.eastus.logic.azure.com:443/workflows/00c24027a7e84866bc4cdb3551067ef8/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=u7WvX6uuVNAH8Ir_cGDw87l28-O-RUGA2kRlvpYCj1M';

    return this.http.post<any>(functionUrl, user);
  }

  public getLogin(email: string, password: string) {
    return this.http.get(this.getlogin + "email=" + email+"&password="+password);
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
