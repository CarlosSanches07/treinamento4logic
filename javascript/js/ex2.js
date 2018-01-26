const baseUrl = 'https://testsimpleapi.herokuapp.com/v1';

/*Search function*/

let clearForms = () => {
	$('.value-clear').val('');
}

let searchContacts = (e) => {
	$.ajax({
		method: 'get',
		url: 'http://localhost:3000/v1/contacts'
	})
	.done((data) => {
		text = e.currentTarget.value;
		if(!text){
			getContacts(data,contactsClick);
			return
		}
		screen = $('.test');
		screen.empty();
		filtered = data.filter((item) => {
			let name = `${item.firstName} ${item.lastName}`;
			return name.toUpperCase().includes(text.toUpperCase());
		})
		createList(filtered);
		contactsClick();
	})
}

/*Create list*/

let createList = (data) => {
	$('.content').empty();
	let view = '';
	data.forEach((item) => {
		let favColor;
		let comColor;

		if(String(item.isFavorite) === "true"){
			favColor = 'yellow';
		}else{
			favColor = 'black';
		}

		if(!item.info.comments){
			comColor = 'black';
		} else {
			comColor = 'blue';
		}

		view += `
				<li class="contact-link" data-id="${item._id}">
					<i class="fa fa-star" aria-hidden="true" style = "color: ${favColor};"></i>
					<i class="fa fa-comment aria-hidden="true" style = "color : ${comColor}"></i>
					<p>${item.firstName} ${item.lastName}<p>
					<img src="${item.info.avatar}" alt="photo">
				</li>
				`
	});
	$('.content').append(view);
}


/*Click Event to the list itens*/

let genderChange = () => {
	let radio = `<div class='radio'>
					<label for="male"><i class="gender-info info fa fa-male"></i>
						<input class="radio-male radio" type="radio" name="gender" value="fa-male" id="male" data-value="m">
					</label>
					<label for="female"><i class="gender-info info fa fa-female"></i>
						<input class="radio-female radio" type="radio" name="gender" value="fa-female" id="female" data-value="f">
					</label>
				</div>`;
	$('.gender-info').hide(0);
	$('.contact-info').append(radio);
	$('.radio').blur((e) => {
		if($('.gender-info').hasClass('fa-female')){
	    	$('.gender-info').removeClass('fa-female');
	    }
	    if($('.gender-info').hasClass('fa-male')){
	    	$('.gender-info').removeClass('fa-male');
	    }
	   	let gender = e.currentTarget.value;
	    $('.gender-info').addClass(gender);
	    $('.gender-info')["0"].dataset.value = e.currentTarget.dataset.value;
	    $('.radio').remove();
	    $('.gender-info').show(0);
	    putContact();
	})
}

let contactsClick = () => {
	$('.contact-link').click((e) => {
		let id = e.currentTarget.dataset.id;
		$.ajax({
			method: 'get',
			url: `${baseUrl}/contacts/${id}`
		})
		.done((data) => {
			sessionStorage.setItem('id', id);
			getInfo(data);
		})
	})
}


/*Getting one contact full info*/

let getInfo = (data) =>{
	$('.fName').text(`${data.firstName}`);
	$('.lName').text(`${data.lastName}`);
	$('.email-info').text(`${data.email}`);

	let gender = '';
	if(data.gender.includes("m")){
		gender = 'fa fa-male';
		genderValue = 'm'
	} else {
		gender = 'fa fa-female';
		genderValue = 'f'
	}
	let html = `<i class="gender-info info ${gender}" aria-hidden="true" title="double click to edit" data-value=${genderValue}></i>`;
	$('.gender-info').remove();
	$('.contact-info').append(html);

	$('.avatar').attr('src',`${data.info.avatar}`);
	$('.company-info').text(`${data.info.company}`);
	$('.address-info').text(`${data.info.address}`);
	$('.phone-info').text(`${data.info.phone}`);
	$('.comments-info').text(`${data.info.comments}`);

	if(String(data.isFavorite) === "true"){
		$('.favorite').css('color', 'yellow');
	}else{
		$('.favorite').css('color', 'black');
	}

	$('.btn-fav')[0].dataset.fav = data.isFavorite;
	$('.form-container').hide(0,()=> {
		$('	.contact-container').show(0);
		$('.contact-container').css('display', 'grid');
	})

	$('.gender-info').dblclick(genderChange)
}

/*Create method*/

let postContacts = () => {

	if($('.first-name').val() == "" || $('.last-name').val() == ""){
		alert('Name cannot be empty');
		return;
	}

	if($('.email').val() == ""){
		alert('email cannot be empty');
		return;
	}

	let avatar;

	if(!$('.usr-avatar').val()){
		avatar = 'https://img.gawkerassets.com/img/18bdx92z3gkiqjpg/original.jpg';
	}else {
		if($('.usr-avatar').val().includes('.jpg') || $('.usr-avatar').val().includes('.png'))
			avatar = $('.usr-avatar').val();
		else
			avatar = 'https://img.gawkerassets.com/img/18bdx92z3gkiqjpg/original.jpg';
	}

	let gender;

	if($('.male')["0"].checked){
		gender = $('.male').val();
	}else{
		gender = $('.female').val();
	}

	let data = {
			'firstName' : $('.first-name').val(),
			'lastName' : $('.last-name').val(),
			'email' : $('.email').val(),
			'gender' : gender,
			'info' : {
				'avatar' : avatar,
				'company' : $('.company').val(),
				'address' : $('.address').val(),
				'phone' : $('.phone').val(),
				'comments' : $('.comments').val()
			},
			'isFavorite' : false
		}
	$.ajax({
		method: 'post',
		url: `${baseUrl}/contacts`,
		data: data,
		dataType: 'json',
		encode: true
	})
	.done((postRes) => {
		$.ajax({
			method: 'get',
			url: `${baseUrl}/contacts/${postRes}`
		})
		.done((data) => {
			sessionStorage.setItem('id', postRes);
			getInfo(data);
			clearForms();
		})
		get();
	})
}

/*Read method*/

let get = () => {
	$.ajax({
		method: 'get',
		url: `${baseUrl}/contacts`
	})
	.done((data => {
		$('.content').empty();
		getContacts(data,contactsClick);
	}))
}

let getContacts = (data, callback) => {
	favorite = data.filter((item) => {
		return (String(item.isFavorite) === 'true');
	});
	unfavorite = data.filter((item) => {
		return (String(item.isFavorite) !== 'true');
	})
	favorite.push(...unfavorite);

	createList(favorite);
	callback();
}

/*Update method*/

let putContact = () => {
	if($('.fName').text() == "" || $('.lName').text() == ""){
		alert('Name cannot be empty');
		return;
	}
	if($('.email-info').text() == ""){
		alert('email cannot be empty');
		return;
	}
	let data = {
		'firstName' : $('.fName').text(),
		'lastName' : $('.lName').text(),
		'email' : $('.email-info').text(),
		'gender' : $('.gender-info')[0].dataset.value,
		'info' : {
			'avatar' : $('.avatar').attr('src'),
			'company' : $('.company-info').text(),
			'address' : $('.address-info').text(),
			'phone' : $('.phone-info').text(),
			'comments' : $('.comments-info').text()
		},
		'isFavorite' : $('.btn-fav')[0].dataset.fav
	}
	$.ajax({
		method: 'put',
		url: `${baseUrl}/contacts/${sessionStorage.getItem('id')}`,
		data: data,
		dataType: 'json',
		encode: true
	})
	.done((data) => {
		get();
	})
}

/*Delete method*/

let deleteContact = () => {
	if(!confirm('Do you really want to delete it ??'))
		return;
	let id = sessionStorage.getItem('id');

	$.ajax({
		method: 'delete',
		url: `${baseUrl}/contacts/${id}`
	})
	.done((data => {
		sessionStorage.clear();
		get();
		$('.contact-container').hide(0,()=> {
				$('.form-container').show(0);
		})
	}))
}



let error = (err) => {
	console.log(err);
}

/*Export actual DB*/

let exportList = () => {
	$.ajax({
		method: 'get',
		url: `${baseUrl}/contacts`
	})
	.done((data => {
		let text = JSON.stringify(data);
		let formatedText = text.replace(/},{/gi, '}\n{');
		formatedText = formatedText.replace(/\[|\]/gi, '');
		let type = 'application/json';
		let name = 'contacts.db';
		let file = new Blob([formatedText],{type: type});
		let url = URL.createObjectURL(file);
		let link = `<a class="export-link" href="${url}" download="${name}">Your download is ready !!!</a>`;
		$('.header').append(link);
		$('.export-link').click((e) => $('.export-link').remove());
	}))
}


$(document).ready(()=> {

/*_______POST_________*/

	$('.add').click(postContacts);

/*_______GET__________*/
	$.ajax({
		method: 'get',
		url: `${baseUrl}/contacts`
	})
	.done((data => {
		getContacts(data,contactsClick);
	}))

/*_______PUT________*/

	$('.info').blur(putContact);

/*_______DELETE_______*/

	$('.delete-contact').click(deleteContact);

/*Buttons */

	$('.add-contact').click(()=>{
		$('.contact-container').hide(0,()=> {
			$('.form-container').show(0);
		})
	})

	$('.btn-fav').click((e) => {
		let favorite = e.currentTarget.dataset.fav;
		if(favorite === "true"){
			e.currentTarget.dataset.fav = "false";
			$('.favorite').css('color', 'black');
		}else{
			e.currentTarget.dataset.fav = "true";
			$('.favorite').css('color', 'yellow');
		}
		putContact();
	})

	$('.export').click(exportList);

	$('.search').keydown((e) => {
		searchContacts(e);
	})

	$('.usr-avatar').blur((e) =>{
		let url = $('.usr-avatar').val();
		$('.lbl-img').css('width', '50%');
			$('.img-avatar').css('background-image', `url('${url}')`);
		$('.img-avatar').show(0);
	})

})