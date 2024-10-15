import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { auth } from '../../../../../env/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthGuardService } from '../../../../Services/authguard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private _authService = inject(AuthGuardService);

  constructor(private router: Router, private toastr: ToastrService) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  successLogin() {
    this.toastr.success('You have successfully logged in!', '', {
      timeOut: 3000,
      easing: 'ease-in',
      easeTime: 300,
      progressBar: true,
      closeButton: true,
      progressAnimation: 'decreasing',
      toastClass: 'ngx-toastr',
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      signInWithEmailAndPassword(auth, email!, password!)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log('User logged in successfully:', user);
          this.successLogin();
          this._authService.login();
          // Navigate to home page or dashboard
          setTimeout(() => {
            this.router.navigate(['/homepage']); // Adjust this route as needed
          }, 2000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Login error:', errorCode, errorMessage);
          this.toastr.error('email or password not correct', 'Login Error');
        });
    }
  }
}
