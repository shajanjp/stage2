import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, filter, tap} from 'rxjs/operators';
import {ContactsService} from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  private subject: Subject<any> = new Subject();
  public contact;
  public loading = false;
  public searchText = '';

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit(): void {
    this.subject
      .pipe(debounceTime(500),
        filter(val => {
          this.searchText = val;
          this.contact = undefined;

          return !!val
        }),
        tap(() => {
          this.loading = true;
        }))
      .subscribe((val) => {
          this.contactsService.findContact(val).subscribe(val => {
            this.contact = val;
          }).add(() => {
            this.loading = false;
          });
        }
      )
  }

  findContact(event) {
    this.subject.next(event);
  }

  delete(contact) {

  }
}
