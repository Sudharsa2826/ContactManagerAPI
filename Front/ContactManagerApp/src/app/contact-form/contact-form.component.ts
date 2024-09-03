import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  contactId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.contactId = +this.route.snapshot.paramMap.get('id')!;
    if (this.contactId) {
      this.contactService.getContactById(this.contactId).subscribe(contact => {
        this.contactForm.patchValue(contact);
      });
    }
  }

  onSubmit(): void {
    if (this.contactId) {
      this.contactService.updateContact(this.contactId, this.contactForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.contactService.addContact(this.contactForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
