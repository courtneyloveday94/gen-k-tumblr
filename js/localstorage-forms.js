// name, email, contact-message, chat-username, profile-pic-url

// CONTACT FORM

// does this user have a name saved?
if(localStorage.getItem('name')){
	// put the name in the name field
	document.querySelector('#name').value=localStorage.getItem('name');
}
// listen for input on the name field
document.querySelector('#name').onkeyup=function(){
	localStorage.setItem('name', this.value);
}

// does this user have an email saved?
if(localStorage.getItem('email')){
	// puts the email address in the email field
	document.querySelector('#email').value=localStorage.getItem('email');
}
// listen for input on the email field
document.querySelector('#email').onkeyup=function(){
	localStorage.setItem('email', this.value);
}