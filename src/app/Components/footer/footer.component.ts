import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // onSubmit(form: NgForm) {
  //   if (form.errors) {
  //     console.log('Please enter your email address.');
  //   } else {
  //     console.log('Form Data:', form.value);
  //     form.resetForm();
  //   }
  // }
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Process the form data here, e.g., send it to the server
      console.log('Form submitted successfully:', form.value);
      form.reset(); // Optional: Reset the form after successful submission
    }
  }

}
