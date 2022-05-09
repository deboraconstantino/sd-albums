import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('user') && localStorage.getItem('password')) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
