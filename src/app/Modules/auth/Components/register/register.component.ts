import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {

  constructor(private router:Router , private toastr: ToastrService){}
  userInfo: any[] = [];
  registerForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });


  successSignup() {
    this.toastr.success('You have successfully signuped !','', {
      timeOut: 3000,
      easing: 'ease-in',
      easeTime: 300,
      progressBar: true,
      closeButton: true,
      progressAnimation: 'decreasing',
      toastClass:'ngx-toastr',
    });
  }

  onRegistersubmit() {
    // console.log(this.registerForm);
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      this.userInfo = [this.registerForm.value];
      localStorage.setItem('userInfo',JSON.stringify(this.userInfo))
      this.successSignup()
      setTimeout(() => {

        this.router.navigate(['/auth/login'])
      }, 2000);
    }

    // console.log(this.userInfo);
  }
}
