import { Injectable } 				from '@angular/core';
import { UserModel }					from '../../user-model';

@Injectable()
export class UserService {

	userList : UserModel[]

  constructor( ) { }

  setList(list : any[]) {
  	this.userList = list;
  }

  getList( ) : any[] {
  	return this.userList;
  }

}
