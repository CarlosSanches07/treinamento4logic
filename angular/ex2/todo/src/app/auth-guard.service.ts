import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router : Router
    ) { }

  canActivate (next : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  checkLogin() : boolean { 
    if(localStorage.getItem('id') !== null) {
      return true;
    }
    this.router.navigate(['login']);

    return false;     
  }
}
