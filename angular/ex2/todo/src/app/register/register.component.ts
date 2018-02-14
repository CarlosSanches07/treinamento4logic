import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../Models/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router : Router 
    ) { }

  ngOnInit() {
    const input = Array.from(document.querySelectorAll('.login-input'));
    let placeholder : string;
    input.forEach((item) => {
      item.addEventListener('click', () => {
        if(item.hasAttribute('placeholder')){
          placeholder = item.getAttribute('placeholder')
          item.removeAttribute('placeholder')
        }
      })
    })
    input.forEach((item) => {
      item.addEventListener('blur', () => {
        item.setAttribute('placeholder', placeholder);
      })
    })
  }

  back () {
    this.router.navigateByUrl('/login');
  }

  newUser (username : string, password : string) {
    if(!username || !password){
      const input = Array.from(document.querySelectorAll('.login-input'));
      input.forEach(item => item.classList.add('login-error'));
      return;
    }
    const user : User = new User(username, password);
    if(!User.verifyUser(user)){
      user.id = User.generateId()
      User.createUser(user)
      alert('User successfully created')
      this.router.navigateByUrl('/login');
    } else {
      alert('This UserName already exits');
    }
  }
}
