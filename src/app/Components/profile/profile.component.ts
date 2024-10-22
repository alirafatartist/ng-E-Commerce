import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']  // Corrected to styleUrls for multiple stylesheets
})
export class ProfileComponent {
  // Profile data
  profile = {
    firstName: 'Ahmed',
    lastName: 'Ghanem',
    email: 'ahmedghanem@gmail.com',
    phone: '(123) 456-7890',
    address: '1234 Cairo Street, City, State, 56789',
    aboutMe: 'A passionate developer with experience in creating high-quality applications.'
  };

  // Initially, the form is in read-only mode
  isEditing: boolean = false;

  // Toggle edit mode
  toggleEdit() {
    this.isEditing = !this.isEditing;

    if (!this.isEditing) {
      // Logic to save the updated profile when editing is finished
      console.log('Profile updated:', this.profile);
      // Here you can add code to save the profile, such as an HTTP request to the backend
    }
  }
}
