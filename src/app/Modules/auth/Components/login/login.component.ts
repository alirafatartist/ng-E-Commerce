import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router:Router){}

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')!) || [];

    console.log(userInfo);

    if (userInfo.length > 0) {
      this.login.patchValue({
        email: userInfo[0].email ,
        password: userInfo[0].password
      });
    }
  }

  loginUser(){
    this.router.navigate(['/homepage'])
  }

}
