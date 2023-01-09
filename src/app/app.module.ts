import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFeaturedListComponent } from './product-featured-list/product-featured-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';  // 2-way binding
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    AppComponent,

    BrandListComponent,
    ProductListComponent,
    ProductFeaturedListComponent,
    CreateCustomerComponent,
    LoginCustomerComponent,
    FooterComponent,
    ProductdetailsComponent,
    PageNotFoundComponent,
    HomePageComponent,
    NavbarComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule /* or CommonModule */,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

};
