import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { auth } from '../../../../../env/firebase.config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private router: Router, private toastr: ToastrService) {}

  registerForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  successSignup() {
    this.toastr.success('You have successfully signed up!', '', {
      timeOut: 3000,
      easing: 'ease-in',
      easeTime: 300,
      progressBar: true,
      closeButton: true,
      progressAnimation: 'decreasing',
      toastClass: 'ngx-toastr',
    });
  }

  onRegistersubmit() {
    if (this.registerForm.valid) {
      const { userName, email, password } = this.registerForm.value;

      createUserWithEmailAndPassword(auth, email!, password!)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // Update profile
          updateProfile(user, { displayName: userName })
            .then(() => {
              console.log('User registered successfully:', user);
              this.successSignup();
              setTimeout(() => {
                this.router.navigate(['/auth/login']);
              }, 2000);
            })
            .catch((error) => {
              console.error('Error updating profile:', error);
              this.toastr.error('Error updating profile');
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Registration error:', errorCode, errorMessage);
          this.toastr.error(errorMessage, 'Registration Error');
        });
    }
  }
}
