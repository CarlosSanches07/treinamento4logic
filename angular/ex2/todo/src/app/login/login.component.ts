import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../Models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router : Router
    ) { }

  ngOnInit() {
    if(localStorage.getItem('id') !== null)
      localStorage.removeItem('id');
  }

  register () {
    this.router.navigateByUrl('/register');
  }

  login (username, password) {
    const user : User = new User(username, password);
    if(User.verifyUser(user)){
      if(User.verifyPassword(user)){
        this.router.navigateByUrl('/todoList');
        localStorage.setItem('id', String(User.getUserId(username)));
      }
      else
        alert('Password is wrong')
    } else {
      alert('UserName is not registered');
    }

  }

}
