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
import { DashboardusersComponent } from './dashboardusers/dashboardusers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ItemsdashboardComponent } from './itemsdashboard/itemsdashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { HeaderuserComponent } from './headeruser/headeruser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    MenuComponent,
    HeaderComponent,
    DashboardComponent,
    DashboardusersComponent,
    ContactUsComponent,
    AboutUsComponent,
    OrderHistoryComponent,
    ItemsdashboardComponent,
    LoginPageComponent,
    HomeuserComponent,
    HeaderuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
