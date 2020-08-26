import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register.service';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterGetService } from './register-get.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ProductsService,
  LoginService,
  RegisterService,
  RegisterGetService,
  AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
