import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [

  { path: '', redirectTo: 'homepage/', pathMatch: 'full' },
  { path: 'homepage/', component: HomePageComponent },
  { path: 'customer/signup', component: CreateCustomerComponent },
  { path: 'customer/login', component: LoginCustomerComponent },
  { path: 'product/BrandP/:Brandid', component: ProductListComponent },
  { path: 'product/details/:productid', component: ProductdetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
