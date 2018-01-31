import {ContatoInterface} from './contato.interface';
import {Gender} from './gender.enum';

export class Contato implements ContatoInterface {
	private _name : string;
	private _email : string;
	private _birth : Date;
	private _gender : Gender;
	private _isFavorite : boolean;

	constructor (name:string, email:string, birth:Date, gender:Gender, favorite:boolean) {
		this._name = name;
		this._email = email;
		this._birth = birth;
		this._gender = gender;
		this._isFavorite = favorite; 
	}

	get name () : string {
		return this._name;
	} 

	set name (name : string) {
		this._name = name;
	}

	get email () : string {
		return this._email;
	} 

	set email (email : string) {
		this._email = email;
	}

	get birth () : Date {
		return this._birth;
	}

	set birth (birth : Date) {
		this._birth = birth;
	}

	get gender () : Gender {
		return this._gender;
	}

	set gender (gender : Gender) {
		this._gender = gender;
	}

	get isFavorite () : boolean {
		return this._isFavorite;
	}

	set isFavorit (favorite : boolean) {
		this._isFavorite = favorite;
	}

	getAge() : number {
		let today : Date = new Date();
		let age : number = ((today.getFullYear()) - (this._birth.getFullYear()));
		let month : number = ((today.getMonth()) - (this._birth.getMonth()));
		let day : number = ((today.getDay()) - (this._birth.getDay()));

		month = (day < 0) ? month -1 : month;
		age = (month < 0) ? age - 1 : age;

		return age;
	}
}