import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token : any;
  

  constructor(private httpService : HttpService) {
    this.token=localStorage.getItem('token');
  }  
  
  register(reqdata:any){
    let header = {
      headers: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
          //Authorization : 'token' 
        })
    }
    return this.httpService.postService('/User/Register',reqdata,false,header)
  }

  login(reqdata:any){
    let header = {
      headers: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
          //Authorization : 'token' 
        })
    }
    return this.httpService.postService('/User/Login',reqdata,false,header)
  }

  forgetPassword(reqdata:any){
    let header = {
      headers: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
          //Authorization : 'token' 
        })
    }
    return this.httpService.postService('/User/ForgetPasword?email='+(reqdata.email),reqdata,false,header)
  }

  resetPassword(reqdata:any,token:any){
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
           'Authorization' :  'Bearer '+token 
        })
    }
    return this.httpService.postService('/User/ResetPassword?newPassword='+reqdata.newpassword+'&confirmPassword='+reqdata.confirmpassword,{},true,header)
  }
}
