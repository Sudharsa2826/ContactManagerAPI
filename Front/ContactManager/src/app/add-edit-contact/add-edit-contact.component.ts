import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit {
  contact: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: ''
  };
  isEditMode: boolean = false;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.contactService.getContact(id).subscribe((data: Contact) => {
        this.contact = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.contactService.updateContact(this.contact).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.contactService.addContact(this.contact).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
