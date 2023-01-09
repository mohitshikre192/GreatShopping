import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { NgToastService } from "ng-angular-popup";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: any = {};
  errorMsg: string = "";
  constructor(private custService: CustomerService, private router: Router, private toast: NgToastService, private formBuilder: FormBuilder, private http: HttpClient) { }
  form!: FormGroup;
  loading = false;
  submitted = false;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Cust_Name: ['', Validators.required],
      Phone: ['', Validators.required],
      Email: ['', [Validators.required,Validators.email]],
      Cust_Address: ['', Validators.required],
      City: ['', Validators.required],
      State_: ['', Validators.required],
      Pincode: ['', Validators.required],
      DOB: ['', Validators.required],
      Cust_Password: ['', [Validators.required, Validators.minLength(6)]]
    });
      }
  
  createCustomer() {
    console.log('Inside Component');
    console.log(this.customer);
    this.custService.createCustomer(this.customer).subscribe((data: Customer) => {
      this.toast.success({ detail: "Successfully Registered", summary: "You are successfully registered ,   Now login to continue !!", duration: 5000 });

      this.router.navigate(['/customer/login/']).then();
    },
      (error) => {
        this.toast.error({ detail: "Registeration Unsuccessful", summary: "Try again", duration: 5000 });

        this.errorMsg = error;
        this.router.navigate(['/customer/signup/']).then();
        
      });
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    let functionUrl: string = 'https://prod-40.eastus.logic.azure.com:443/workflows/00c24027a7e84866bc4cdb3551067ef8/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=u7WvX6uuVNAH8Ir_cGDw87l28-O-RUGA2kRlvpYCj1M';

    // reset alerts on submit
  

    // stop here if form is invalid
   

    this.loading = true;
    console.log('Inside Component');
    console.log(this.customer);
    console.log(this.f);
    this.custService.createCustomer(this.form.value).subscribe((data: Customer) => {
      this.toast.success({ detail: "Successfully Registered", summary: "You are successfully registered ,   Now login to continue !!", duration: 5000 });

      this.router.navigate(['/customer/login/']).then();
    },
      (error) => {
        this.toast.error({ detail: "Registration Unsuccessful", summary: "may be account's already created with this email try again with different email!", duration: 5000 });

        this.errorMsg = error;
        this.router.navigate(['/customer/signup/']).then();

      });
  }

}
