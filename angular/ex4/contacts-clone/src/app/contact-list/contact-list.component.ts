import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  constructor(
    private router : Router,
    private service : ContactsService
    ) { }

  subscribe : Subscription;
  contacts : any[];

  ngOnInit() {
    this.subscribe = this.service.getContacts().subscribe((res) => {
      this.contacts = res;
    });
  }

  ngOnDestroy() {
    if(this.subscribe)
      this.subscribe.unsubscribe();
  }

  edit (id : any) {

    let url : string = `/edit/${id}`;
    this.router.navigateByUrl(url);

  }

}
