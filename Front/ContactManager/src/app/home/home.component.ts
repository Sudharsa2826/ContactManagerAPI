import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contacts: Contact[] = [];
  sortedBy: keyof Contact = 'firstName';  // Explicitly set as a key of Contact
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactService.getContacts().subscribe((data: Contact[]) => {
      this.contacts = data;
      this.sortContacts();
    });
  }

  sortContacts(): void {
    this.contacts.sort((a, b) => {
      const fieldA = a[this.sortedBy]?.toString().toLowerCase() || '';
      const fieldB = b[this.sortedBy]?.toString().toLowerCase() || '';

      if (fieldA < fieldB) {
        return this.sortOrder === 'asc' ? -1 : 1;
      }
      if (fieldA > fieldB) {
        return this.sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  sortBy(field: keyof Contact): void {
    if (this.sortedBy === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedBy = field;
      this.sortOrder = 'asc';
    }
    this.sortContacts();
  }

  deleteContact(id: number): void {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contactService.deleteContact(id).subscribe(() => {
        this.loadContacts();
      });
    }
  }
}
