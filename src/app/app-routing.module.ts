import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterLoginComponent } from './components/register-login/register-login.component';

const routes: Routes = [
  {path : 'registerLogin' , component: RegisterLoginComponent},
  {path : 'login' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
