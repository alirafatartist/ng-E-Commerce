import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  constructor(private router:Router , private toastr: ToastrService){}

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

   userInfo:any = JSON.parse(localStorage.getItem('userInfo')!) || [];
  ngOnInit(): void {

    console.log(this.userInfo);

    if (this.userInfo.length > 0) {
      this.login.patchValue({
        email: this.userInfo[0].email ,
        password: this.userInfo[0].password
      });
    }
  }

  successLogin() {
    this.toastr.success('You have successfully logged in!', 'Login Success!', {
      timeOut: 3000,
      easing: 'ease-in',
      easeTime: 300,
      progressBar: true,
      closeButton: true,
      progressAnimation: 'decreasing',
      toastClass:'ngx-toastr',
    });
  }

  faildLogin() {
    this.toastr.error('Please check your email & password', 'Failed Login', {
      timeOut: 3000,
      easing: 'ease-in-out',
      easeTime: 300,
      progressBar: true,
      closeButton: true,
      progressAnimation: 'decreasing',
      toastClass:'ngx-toastr',
    });
  }



  loginUser(){

    if(this.login.controls.email.value == this.userInfo[0].email && this.login.controls.password.value == this.userInfo[0].password){
      this.successLogin()
      setTimeout(() => {
        this.router.navigate(['/homepage'])
      }, 2000);
    }else{
      this.faildLogin()
    }
  }

}
