// name, email, contact-message, chat-username, profile-pic-url

// CHAT FORM

// does this user have a chat-username saved?
if(localStorage.getItem('chat-username')){
	// put the name in the chat-username field
	document.querySelector('#chat-username').value=localStorage.getItem('chat-username');
}
// listen for input on the chat-username field
document.querySelector('#chat-username').onkeyup=function(){
	localStorage.setItem('chat-username', this.value);
}

// does this user have a profile picture url saved?
if(localStorage.getItem('profile-pic-url')){
	// put the url in the profile-pic-url field
	document.querySelector('#profile-pic-url').value=localStorage.getItem('profile-pic-url');
}
// listen for input on the profile-pic-url field
document.querySelector('#profile-pic-url').onkeyup=function(){
	localStorage.setItem('profile-pic-url', this.value);
}


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