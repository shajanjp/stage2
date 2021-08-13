import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  findContact(name): Observable<any> {
    return this.http.get<any>(`/api/contacts/${name}`);
  }

  addContact(contact): Observable<any> {
    return this.http.post<any>(`/api/contacts/`, contact);
  }
}
