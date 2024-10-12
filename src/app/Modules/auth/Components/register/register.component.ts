import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {

  constructor(private router:Router){}
  userInfo: any[] = [];
  registerForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onRegistersubmit() {
    // console.log(this.registerForm);
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      this.userInfo = [this.registerForm.value];
      localStorage.setItem('userInfo',JSON.stringify(this.userInfo))
      this.router.navigate(['/auth/login'])
    }

    // console.log(this.userInfo);
  }
}
