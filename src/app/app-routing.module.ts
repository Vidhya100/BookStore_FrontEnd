import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBooksComponent } from './components/display-books/display-books.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterLoginComponent } from './components/register-login/register-login.component';
import { ResetComponent } from './components/reset/reset.component';

const routes: Routes = [
  {path : 'registerLogin' , component: RegisterLoginComponent},
  {path : 'login' , component: LoginComponent},
  {path : 'forgetPassword' , component: ForgetPasswordComponent},
  {path : 'resetPassword' , component: ResetComponent},
  {path : 'dashboard' , component: HomeComponent,
  children:[
    {path:'get-all-books', component: DisplayBooksComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
