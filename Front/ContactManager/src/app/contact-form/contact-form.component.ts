import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contact: Contact = {
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
  isEditMode = false;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.contactService.getContact(+id).subscribe(data => this.contact = data);
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
