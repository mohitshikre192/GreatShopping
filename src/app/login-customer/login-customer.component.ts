import { Component, Injectable, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs";
import { AppComponent } from "../app.component";
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";
import { NgToastService} from "ng-angular-popup";
@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})


export class LoginCustomerComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  order: any;
  customer: any = {};
    errorMsg: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private app: AppComponent,
    private toast: NgToastService,
  ) {
    this.order = this.router.getCurrentNavigation()?.extras.state;
  }
 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  login(email: string, password: string) {
    var details = {
      email: email,
      password: password,
    };
    this.service.getLogin(email,password).subscribe((userCreds: any) => {
      console.log('userCreds', userCreds);
      this.app.setdata(userCreds);
      this.logincheck();
    });
  }
  logincheck() {
    if (this.order === undefined) {
      if (!this.app.getdata()) {
        alert("Invalid login or password");
      }
      else {
        this.router.navigate(['/']);
      }
    }else {
        if (!this.app.getdata()) {
          alert('Invalid login or password');
        } else {
          this.router.navigate(['/homepage'], { state: this.order });
        }
      }
    
  }
 


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.service.getLogin(this.f["email"].value, this.f["password"].value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page

          this.toast.success({ detail: "Success Message", summary: "Login succesful", duration: 5000 });
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
          this.loginForm.reset();
        },
        error: error => {
     
          this.toast.error({detail:"Login Unsuccessful",summary:"Login failed, try again later!!!",duration:5000})
          this.loading = false;
          this.loginForm.reset();
        }
      });

  }
}
