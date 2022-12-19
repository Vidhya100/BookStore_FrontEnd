import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm! : FormGroup
  hide = true;
  submitted = false;
  constructor(private form:FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.form.group({
      email:['',[Validators.required,Validators.email]],
      password:['', Validators.required,Validators.minLength(8)],
    })
  }

  onSubmit(){
    this.submitted = true;
  }
}
