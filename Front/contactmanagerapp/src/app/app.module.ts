import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactFormComponent,
    ContactDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
