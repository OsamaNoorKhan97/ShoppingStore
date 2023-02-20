import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfigService} from './config/config.service';

import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './LoginComponents/login/login.component';
import { DetailComponent } from './Product/detail/detail.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NotfoundComponent } from './LoginComponents/notfound/notfound.component';
import { ForgetPasswordComponent } from './LoginComponents/forget-password/forget-password.component';
import { ProductsComponent} from './Product/products/products.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './Product/header/header.component';
import { FooterComponent } from './Product/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    DetailComponent,
    NotfoundComponent,
    ForgetPasswordComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
