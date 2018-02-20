import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Model } from '../model'
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit, OnDestroy {

  contactForm : FormGroup;
  model       : Model;
  subscribe   : Subscription;


  constructor(
    private builder : FormBuilder,
    private router  : Router,
    private service : ContactsService
    ) 
    {
      this.createForm();
      this.verifyContent();
    }

  ngOnInit() {
      this.createForm();     
  }

  ngOnDestroy() {
    if(this.subscribe)
      this.subscribe.unsubscribe();
  }

  createForm () {
      this.contactForm = this.builder.group({        
        'firstName'  : [null, Validators.required],
        'lastName'   : [null, Validators.required],
        'email'      : [null, Validators.required],
        info     : this.builder.group({
          'avatar' : [null]
        })        
      })
/*        'info'     : this.builder.group({        
          'company'  : [null],
          'address'  : [null],
          'phone'    : [null],
          'comments' : [null]
        })*/
  }

  addContact ( model : Model ) {
    if(model.firstName)
      this.model = model;
  }

  verifyContent () {
    let model : Model;

    if(this.router.url.includes('edit')){  
      
      const id : string = this.router.url.split('/')[2]; 
      console.log(id);
      this.subscribe = this.service.getContactById(id).subscribe((res) => {
        console.log(res);
        this.contactForm.patchValue(res);
      })

    } else {
      model = { 

        firstName  : null,
        lastName   : null,
        email      : null,
        info       : {
          avatar  : null
        }

      }
      this.contactForm.patchValue(model);
    }
  }

}
