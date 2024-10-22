import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { auth } from '../../../../../env/firebase.config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'], // Fixed to 'styleUrls'
})
export class RegisterComponent {
  constructor(private router: Router, private toastr: ToastrService) {}

  // Initialize the form with validation rules for all fields
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]), // Only numbers allowed
    address: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  // Success notification
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

  // Form submission logic
  onRegistersubmit() {
    if (this.registerForm.valid) {
      const { firstName, lastName, email, password, phone, address } =
        this.registerForm.value;

      createUserWithEmailAndPassword(auth, email!, password!)
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, { displayName: firstName + ' ' + lastName });
        })
        .then(() => {
          this.successSignup();
          setTimeout(() => {
            this.router.navigate(['/auth/login']);
          }, 2000);
        })
        .catch((error) => {
          this.toastr.error(error.message, 'Registration Error');
        });
    }
  }
}
