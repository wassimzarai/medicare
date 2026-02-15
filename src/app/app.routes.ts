import { Routes } from '@angular/router';
import { HomeComponent } from './front-office/home/home';
import { AdminComponent } from './back-office/admin/admin';
import { LoginComponent } from './front-office/login/login';
import { RegisterComponent } from './front-office/register/register';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/home' }
];
