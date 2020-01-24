import {Routes, RouterModule} from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { NgModule } from '@angular/core';

const routes: Routes=[
    {path:'', component:HomePageComponent},
    {path:'login', component:LoginPageComponent},
    {path:'signup', component:SignupPageComponent},
    {path:'products', component:ProductsPageComponent},
    {path:'about', component:AboutPageComponent},
    {path:'order', component:OrderPageComponent},
    {path:'**', redirectTo:''}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}