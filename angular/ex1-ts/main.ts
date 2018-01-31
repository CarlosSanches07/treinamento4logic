import {Contato} from './contato';
import {Gender} from './gender.enum';

class Main {

	public static main() :void {
		
		let contato = new Contato('John Doe','jhon@mail.com', new Date(1994,7,7), Gender.Male, true);

		console.log(`Contact:\n\tName: ${contato.name}\n\tEmail: ${contato.email}\n\tGender: ${contato.gender}\n\tAge: ${contato.getAge()}`);
	}

}

Main.main();