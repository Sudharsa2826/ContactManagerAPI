import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddEditContactComponent } from './add-edit-contact/add-edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEditContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)  // Use appRoutes here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
