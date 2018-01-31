import {Contato} from './contato';
import {Gender} from './gender.enum';

class Main {

	public static main() :void {
		
		let contato = new Contato('John Doe','jhon@mail.com', new Date(1994,7,7), Gender.Male, true);

		console.log(`Contact: ${contato.name}, Age: ${contato.getAge()}`);
	}

}

Main.main();