import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { LoginPageComponent} from 'src/app/login-page/login-page.component';
import { SignupComponent} from 'src/app/signup/signup.component';
import{ ContactUsComponent}from 'src/app/contact-us/contact-us.component';
import{ AboutUsComponent}from 'src/app/about-us/about-us.component';
import{ PaymentComponent}from 'src/app/payment/payment.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// {path:'',redirectTo:'home', pathMatch: 'full' },
