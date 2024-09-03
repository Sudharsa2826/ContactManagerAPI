import { Component } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts: Contact[] = []; // Your contact list
  showForm = false;
  showDelete = false;
  selectedContact: Contact | null = null;

  addContact() {
    this.selectedContact = new Contact();
    this.showForm = true;
  }

  editContact(contact: Contact) {
    this.selectedContact = { ...contact };
    this.showForm = true;
  }

  deleteContact(contact: Contact) {
    this.selectedContact = contact;
    this.showDelete = true;
  }

  closeForm() {
    this.showForm = false;
    this.selectedContact = null;
  }

  confirmDelete() {
    if (this.selectedContact) {
      this.contacts = this.contacts.filter(c => c !== this.selectedContact);
      this.selectedContact = null;
      this.showDelete = false;
    }
  }

  cancelDelete() {
    this.selectedContact = null;
    this.showDelete = false;
  }

  sortContacts(property: string) {
    this.contacts.sort((a, b) => {
      const valueA = a[property as keyof Contact];
      const valueB = b[property as keyof Contact];
      return (valueA < valueB ? -1 : 1);
    });
  }
}
