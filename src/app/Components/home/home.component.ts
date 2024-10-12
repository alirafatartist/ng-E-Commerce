import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isVisible = false;

  // Listen to the scroll event
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      this.isVisible = window.scrollY > 100;
  }

  scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }
}
