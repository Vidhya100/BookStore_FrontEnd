import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgotForm! : FormGroup;
  submitted = false;
  token:any;
  constructor(private form:FormBuilder,private user: UserService,private activeRoute: ActivatedRoute,private _snackBar: MatSnackBar){}

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
        email: this.forgotForm.value.email
      }
      this.token = this.activeRoute.snapshot.paramMap.get('token');
      console.log(payload);
       this.user.forgetPassword(payload).subscribe((response:any)=>{
        console.log(response)
        //added for storing token locally
        localStorage.setItem("token",response.data)
      })
    }
  }
}
