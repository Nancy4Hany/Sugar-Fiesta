import { ProfileComponent } from './profile/profile.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { LoginPageComponent} from 'src/app/login-page/login-page.component';
import { SignupComponent} from 'src/app/signup/signup.component';
import{ ContactUsComponent}from 'src/app/contact-us/contact-us.component';
import{ AboutUsComponent}from 'src/app/about-us/about-us.component';
import{ PaymentComponent}from 'src/app/payment/payment.component';
import{CartComponent} from 'src/app/cart/cart.component'
import{DashboardComponent} from './dashboard/dashboard.component';
import{ DashboardusersComponent} from 'src/app/dashboardusers/dashboardusers.component';
import {ItemsdashboardComponent} from 'src/app/itemsdashboard/itemsdashboard.component';
import {OrderHistoryComponent} from 'src/app/order-history/order-history.component';
import {ProductsComponent} from 'src/app/products/products.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { HeaderuserComponent } from './headeruser/headeruser.component';

const routes: Routes = [
{path:'',redirectTo:'home', pathMatch: 'full' },
{path: 'header', component: HeaderComponent},
{path: 'login', component: LoginPageComponent},
{path: 'signup', component: SignupComponent},
{ path: 'home', component: HomeComponent },
{ path: 'menu', component: MenuComponent },
{path: 'contactus', component:  ContactUsComponent},
{path: 'aboutus', component:  AboutUsComponent},
{path: 'payment', component:  PaymentComponent},
{path: 'cart', component:  CartComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'dashboardusers', component: DashboardusersComponent},
{path: 'itemsdashboard', component: ItemsdashboardComponent},
{path:'order-history', component: OrderHistoryComponent },
{path:'products', component:ProductsComponent},
{path:'profile', component:ProfileComponent},
{path:'homeuser', component:HomeuserComponent},
{path:'headeruser', component:HeaderuserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// {path:'',redirectTo:'home', pathMatch: 'full' },
