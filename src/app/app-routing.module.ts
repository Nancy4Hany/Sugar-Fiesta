import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { LoginPageComponent} from 'src/app/login-page/login-page.component';
import { SignupComponent} from 'src/app/signup/signup.component';
import{ ContactUsComponent}from 'src/app/contact-us/contact-us.component';
import{ AboutUsComponent}from 'src/app/about-us/about-us.component';
import{ CartComponent}from 'src/app/cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { PaymentComponent } from './payment/payment.component';
const routes: Routes = [
{path:'',redirectTo:'home', pathMatch: 'full' },
{path: 'header', component: HeaderComponent},
{path: 'login', component: LoginPageComponent},
{path: 'signup', component: SignupComponent},
{ path: 'home', component: HomeComponent },
{ path: 'menu', component: MenuComponent },
{path: 'contactus', component:  ContactUsComponent},
{path: 'aboutus', component:  AboutUsComponent},
{path: 'login', component: LoginPageComponent},
{path: 'cart', component: CartComponent},
{path: 'products', component:ProductsComponent},
{path: 'signup', component: SignupComponent},
{path: 'payment', component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// {path:'',redirectTo:'home', pathMatch: 'full' },
