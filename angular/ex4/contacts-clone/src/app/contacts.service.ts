import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../environments/environment';

@Injectable()
export class ContactsService {

  constructor(
    private http : Http
    ) { }

  getContacts() : Observable<any> {
    return this.http.get(`${environment.apiUrl}/contacts`)
      .map((res : Response) => res.json())
      
      .catch((err : any) => Observable.throw(err.json().erro || 'Service Error'))  
  }

  getContactById(id : string) : Observable<any>{
    return this.http.get(`${environment.apiUrl}/contacts/${id}`)
      .map((res : Response) => res.json())

      .catch((err : any) => Observable.throw(err.json().erro || 'Service Error'))
  }

}
