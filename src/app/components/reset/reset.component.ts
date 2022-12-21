import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  resetForm! : FormGroup;
  hide=true;
  submitted = false;
  token:any;
  
  constructor(private formBuilder: FormBuilder, private user: UserService,private activeRoute: ActivatedRoute,private _snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group
    ({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
      
  } );
  this.token = this.activeRoute.snapshot.paramMap.get('token');
  }
  get f() { return this.resetForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.resetForm.valid) {
    let payload = {
      newpassword: this.resetForm.value.password,
      confirmpassword: this.resetForm.value.confirmPassword,
      
    }
   
     this.user.resetPassword(payload).subscribe((response:any)=>{
      console.log(response)

      localStorage.setItem("token",response.data)

      this.router.navigateByUrl('login')
    })
    let snackBarRef = this._snackBar.open('Password Changed','',{duration:2000});
  }
  
}
}
