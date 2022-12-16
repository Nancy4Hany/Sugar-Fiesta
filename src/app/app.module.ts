import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { ProfileComponent } from './profile/profile.component';
=======
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';
>>>>>>> 2f0c2a4b6f05e442a765936153fa862a846f3220

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    MenuComponent,
    HeaderComponent,
    DashboardComponent,
<<<<<<< HEAD
    ProfileComponent
=======
    PaymentComponent,
    SignupComponent
>>>>>>> 2f0c2a4b6f05e442a765936153fa862a846f3220
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
