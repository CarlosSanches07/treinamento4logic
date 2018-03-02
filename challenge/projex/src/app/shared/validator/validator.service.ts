import { Injectable } 	from '@angular/core';
import { FormControl }	from '@angular/forms';
@Injectable()
export class ValidatorService {

  constructor() { }

  name(form : FormControl) {
  	let isValid : boolean = true;
  	let regex = /\d|\;|\</;
			if(regex.test(form.value))
				isValid = false;
		return isValid ? null : {
			name : false
		}
  }

  email (form : FormControl) {
  	let isValid : boolean = true;
  	let regex = /\s/; // espaço em branco
		if(regex.test(form.value))
			isValid = false;

		regex = /\@/; // arroba
	
			if(!regex.test(form.value))
				isValid = false;
	
			regex = /\./; // ponto
	
			if(!regex.test(form.value))
				isValid = false;
	
		return isValid ? null : {
			email : false
		};
	}
}
