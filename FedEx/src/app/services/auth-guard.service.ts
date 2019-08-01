import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean | UrlTree {
    const username = localStorage.getItem('Username');
    return username === null ? this.router.parseUrl('/') : true;
  }
}
