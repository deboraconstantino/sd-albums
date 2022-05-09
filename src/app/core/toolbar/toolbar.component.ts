import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private router: Router) {}

  doLogout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    this.router.navigate(['']);
  }

  goToHome(): void {
    this.router.navigate(['home']);
  }
}
