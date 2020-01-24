//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import {  AngularFireAuthModule } from '@angular/fire/auth';


//components
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { HeaderComponent } from './shared/header/header.component';

//Other
import { appReducers } from './app.reducer';
import { environment } from '../environments/environment';
import { firebaseConfig } from './config/congif';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    ProductsPageComponent,
    AboutPageComponent,
    OrderPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
