import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './LoginComponents/login/login.component';
import { ProductsComponent } from './Product/products/products.component';
import { DetailComponent } from './Product/detail/detail.component';
import { NotfoundComponent } from './LoginComponents/notfound/notfound.component';
import { ForgetPasswordComponent } from './LoginComponents/forget-password/forget-password.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'forget-passsword', component:ForgetPasswordComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'detail', component:DetailComponent},
  {path: '', redirectTo :'/login', pathMatch:'full'},
  {path: '**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
