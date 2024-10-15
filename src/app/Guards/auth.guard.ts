import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthGuardService } from '../Services/authguard.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AuthGuardService);
  const _router = inject(Router);

  if (_authService.isLogged) {
    return true;
  } else {
    _router.navigate(['/auth/login']);
    return false;
  }
};
