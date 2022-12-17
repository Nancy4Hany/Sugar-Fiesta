import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { HeaderComponent } from 'src/app/header/header.component';
const routes: Routes = [
{path:'',redirectTo:'home', pathMatch: 'full' },
{path: 'header', component: HeaderComponent},
{ path: 'home', component: HomeComponent },
{ path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// {path:'',redirectTo:'home', pathMatch: 'full' },
