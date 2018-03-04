// import { Injectable }   											from '@angular/core';
// import { FormControl, AbstractControl }				from '@angular/forms'
// import { ControllerService }									from '../../../controller.service';

// @Injectable()
// export class ProjectValidatorService {

//   constructor(
//   	private controller : ControllerService
//   	) { }

//   leaderEmail(form : FormControl) {
//   	let isValid : boolean = true;
//     return (control : AbstractControl) => {
//     	return this.controller.listAll('users')
//   			.subscribe(data => {
//   				const userList = data;
//   				const filteredData = data.filter(i => i.emal === form.value);
//   				if(filteredData.length > 0){
//   					isValid = false;
//   				}
//  					return isValid ? null : {
//   					boss : false
//   					}
//   			});
//   		};
//   	}
//   }
// }