import { Component } from '@angular/core';

import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }

  doLogin(): void {
    this.authService.login('tcoutinhossilva@gmail.com', 'Coutinho.123');

    if(this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }
  doCadastro(): void {
    this.authService.cadastro("tcoutinhossilva@gmail.com", "Coutinho.123", "ADMIN", "Thiago Coutinh", "08866966584");
    this.authService.login('tcoutinhossilva@gmail.com', 'Coutinho.123');

    if(this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }
}