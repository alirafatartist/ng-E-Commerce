import { Component, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      form.resetForm();
    } else {
      console.log('Please enter your email address.');
    }
  }
}
