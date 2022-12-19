import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent {
  signupForm! : FormGroup
  
  hide = true;
  submitted = false;
  
  
  constructor(private form:FormBuilder){}

  ngOnInit(): void {
    this.signupForm = this.form.group({
      fullname:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      mobile:['',[Validators.required,Validators.pattern("[1-9]{1}[0-9]{9}")]]
    })
    
  }

  
  onSubmit(){
    this.submitted = true;
  }
}
