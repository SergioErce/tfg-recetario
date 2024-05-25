import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const user = sessionStorage.getItem('user');
  const router: Router = inject(Router);

  if (user) {
    return true;
  } else {
    router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
};
