import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEditContactComponent } from './add-edit-contact/add-edit-contact.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddEditContactComponent },
  { path: 'edit/:id', component: AddEditContactComponent },
  { path: '**', redirectTo: '/home' }
];
