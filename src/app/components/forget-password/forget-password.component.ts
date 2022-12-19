import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgotForm! : FormGroup;

  submitted = false;
  constructor(private form:FormBuilder,private user: UserService){}

  ngOnInit(): void {
    this.forgotForm = this.form.group({
      email : ['', Validators.required]
    })
    
  }

  

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.forgotForm.valid) {
    let payload = {
      emailId : this.forgotForm.value.email
      
    }
     //this.user.ForgetPassword(payload).subscribe((response:any)=>{
     // console.log(response)

      //localStorage.setItem("token",response.data)
    //})
  }
}
}
