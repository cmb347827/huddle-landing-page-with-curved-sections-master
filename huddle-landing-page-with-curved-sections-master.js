'use strict'; 

const colors ={
	'Almost White': 'hsl(0, 0%, 98%)',
	'Lighter Gray': 'hsl(11, 2%, 95%)',
	'Overlay': 'hsla(8, 24%, 2%, 0.5)',
};

$(window).resize(function(){
	location.reload();
});
const onClick = (selector, handler) => {
  document.querySelector(selector).addEventListener('click', handler);
};

const data ={
	check:'',
	timer:'',
	timeOutVal:3000,
	email: document.getElementById('email'),
	subscribe: document.getElementById('subscribe'),
}
const keyUp = (event)=>{
	//The user may be done typing the email address , check to see if it's valid before enabling submit button
	window.clearTimeout(data.timer); // prevent errant multiple timeouts from being generated
    data.timer = window.setTimeout(() => {
       data.check = validateEmail(data.email);
	   //on check is true(valid email), enablebutton.
	   if(data.check){
		 enableButton(data.subscribe);
		 $('.invalid-feedback').css('display','none');
	   }else{
		  disableButton(data.subscribe);
		 $('.invalid-feedback').css('display','block');
	   }
    }, data.timeOutVal);
}
const keyPress =(event)=>{
	//The user may accidently delete part of the email after typing it, prevent submit even after button enabled
	window.clearTimeout(data.timer); // prevent errant multiple timeouts from being generated
	data.check = validateEmail(data.email);
	if(data.check){
	   $('.invalid-feedback').css('display','none');
	}else{
	   disableButton(data.subscribe);
	}
}

$(window).on('load',function(){
	$('subscribe').on('click',function(){
		 $('.invalid-feedback').css('display','block');
	 });
	//User has pressed the keyboard ,and entered some data in the input field
	email.addEventListener('keyup',keyUp);
	email.addEventListener('keypress',keyPress);  
});