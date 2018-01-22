const baseUrl = 'http://localhost:3000/v1';

let getContacts = (data) => {
	let view = '';
	data.forEach((item) => {
		view += `
				<li>${item.firstName} ${item.lastName}</li>
				`
	})
	console.log(view);
	$('.content').append(view);
}

let error = (err) => {
	console.log(err);
}

$(document).ready(()=> {
	$('.form-addcontact').hide();
/*_______GET__________*/
	
	$.ajax({
		method: 'get',
		url: `${baseUrl}/contacts`,
		success: getContacts,
		error: error
	})
	
/*_______POST_________*/

	$('form').submit((event) => {
		console.log('vaai filhão');
		let data = {
			'firstName' : $('.first-name').val(),
			'lastName' : $('.last-name').val(),
			'email' : $('.email').val(),
			'gender' : $('.gender').val(),
			'info' : {
				'avatar' : 'none',
				'company' : $('.company').val(),
				'address' : $('.address').val(),
				'phone' : $('.phone').val(),
				'comments' : $('.comments').val()
			}
		}

		$.ajax({
			method: 'post',
			url: `${baseUrl}/contacts`,
			data: data,
			dataType: 'json',
			encode: true
		})
		.done((data) => {
			console.log('éoq');
		})
		event.preventDefault();
	})

	$('.add-contact').click(()=>{
		$('.contacts').fadeOut(()=> {
			$('.form-addcontact').fadeIn();
		})
	})

	$('.back').click((e) => {
		$('.form-addcontact').fadeOut(() => {
			$('.contacts').fadeIn();
		})
	})

})