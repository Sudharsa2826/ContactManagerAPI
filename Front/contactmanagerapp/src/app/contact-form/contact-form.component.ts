import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  @Input() contact: Contact = new Contact();
  @Output() closeForm = new EventEmitter<void>();

  onSubmit() {
    // Handle form submission logic here
    this.closeForm.emit();
  }
}
