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

  get f() { return this.forgotForm.controls; }

  onSubmit() {
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.forgotForm.valid) {
      let payload = {
        email: this.forgotForm.value.email,
        service : "advance" 
      }
      //this.token = this.activeRoute.snapshot.paramMap.get('taken');
      console.log(payload);
       this.user.forgetPassword(payload).subscribe((response:any)=>{
        console.log(response)
        //added for storing token locally
        localStorage.setItem("token",response.data)
      })
    }
  }
}
