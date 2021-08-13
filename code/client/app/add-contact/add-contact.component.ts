import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactsService} from '../contacts/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  public contactForm: FormGroup;
  public submit = false;

  get form() {
    return this.contactForm.controls;
  }

  constructor(private fb: FormBuilder, private contactService: ContactsService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      mobile: ['', [Validators.required, Validators.minLength(9)]],
    });
  }

  onSubmit() {
    this.submit = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this.contactService.addContact(this.contactForm.value).subscribe().add(() => {
      alert('contact saved');

      this.submit = false;
      this.contactForm.reset();
    })
  }
}
