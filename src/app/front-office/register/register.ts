import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule, FooterComponent],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  userType: string = '';
  agreeTerms: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router) {}

  onRegister(): void {
    if (!this.firstName || !this.lastName || !this.email || !this.phone || 
        !this.password || !this.confirmPassword || !this.userType || !this.agreeTerms) {
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (this.password.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }

    this.isLoading = true;
    
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      
      // For demo purposes, redirect to login page
      // In a real app, you would register the user with a backend
      alert('Registration successful! Please login.');
      this.router.navigate(['/login']);
    }, 2000);
  }
}
