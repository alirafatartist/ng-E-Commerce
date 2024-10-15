import { Component, inject } from '@angular/core';
import { AuthGuardService } from '../../Services/authguard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  _authService = inject(AuthGuardService);
  _router = inject(Router);
  logout() {
    this._authService.logout();
    this._router.navigate(['/auth/login']);
  }
}
