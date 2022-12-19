import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent {
  signupForm! : FormGroup;
  
  hide = true;
  submitted = false;
  
  
  constructor(private form:FormBuilder,private user: UserService){}

  ngOnInit(): void {
    this.signupForm = this.form.group({
      fullname:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      mobile:['',[Validators.required,Validators.maxLength(10)]]
    })
    
  }

  get f() { return this.signupForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.signupForm.valid) {
    let payload = {
      FullName: this.signupForm.value.fullname,
      EmailId: this.signupForm.value.email,
      Password: this.signupForm.value.password,
      MobileNumber: this.signupForm.value.mobile,
      
    }
     this.user.register(payload).subscribe((response:any)=>{
      console.log(response)

      localStorage.setItem("token",response.data)
    })
  }
}
}
