import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule, FooterComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router) {}

  onLogin(): void {
    if (!this.email || !this.password) {
      return;
    }

    this.isLoading = true;
    
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      
      // For demo purposes, redirect to home page
      // In a real app, you would validate credentials with a backend
      if (this.email && this.password) {
        this.router.navigate(['/home']);
      }
    }, 2000);
  }
}
