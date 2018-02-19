import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Model } from '../model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm : FormGroup;
  post        : any;
  model       : Model;

  constructor(
    private builder : FormBuilder,
    private router  : Router
    ) 
    {
      this.createForm();     
    }

  ngOnInit() {
  }

  createForm () {
      let selectedItem : Model = this.verifyContent();
      this.contactForm = this.builder.group({        
        'name'     : [selectedItem.name, Validators.required],
        'lastName' : [selectedItem.lastName, Validators.required],
        'email'    : [selectedItem.email, Validators.required],
        'imgUrl'   : [null]
/*        'info'     : this.builder.group({        
          'company'  : [null],
          'address'  : [null],
          'phone'    : [null],
          'comments' : [null]
        })*/

      });
  }

  addContact ( model : Model ) {
    if(model.name)
      this.model = model;
  }

  verifyContent ()  : Model {
    let model : Model = { 

      name     : null,
      lastName : null,
      email    : null

    }

    if(this.router.url.includes('edit')){
      
      model.name     = 'ehue';
      model.lastName = 'asdiajsd';
      model.email    = 'sdas';
    
    }
    
    return model;
  }

}
