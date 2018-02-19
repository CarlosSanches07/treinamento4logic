import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(
    private router : Router
    ) { }

  contacts : any[];

  ngOnInit() {
    this.contacts = [
                    {test : 1},
                    {test : 2},
                    {test : 3},
                    {test : 4},
                    {test : 5},
                    {test : 6},
                    {test : 7},
                    {test : 8},
                    {test : 9},
                    {test : 0}
                    ];
  }

  edit (id : any) {

    let url : string = `/edit/${id}`;
    this.router.navigateByUrl(url);

  }

}
