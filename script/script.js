const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});


navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})


function validate_form (){ 
    valid = true;
    if ((document.inputform.firstname.value == "" )||
		(document.inputform.lastname.value == "" )|| 
		(document.inputform.email.value == "" ))  
	{
       	alert ( "Please fill in the required fields" ); 
		valid = false; }
    	return valid;
}