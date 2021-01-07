import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUserPayload: any = JSON.parse(localStorage.getItem('Payload'));
    if (currentUserPayload) {
      if (
        route.data.roles &&
        route.data.roles.indexOf(currentUserPayload.role) === -1
      ) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
  }
}
