﻿
/****************************************************************************************
*				SUNARTHSEIS JAVASCRIPT GENIKOU SKOPOY
*
*****************************************************************************************/

function DIVoutput(message)
{
	document.write("<div>"+message+"</div>");
}
function SPANoutput(message)
{
	document.write("<span>"+message+"</span>");
}

//sunarthsh pou elegxei an ena pedio einai keno
function notEmpty(elem, helperMsg){
	if(elem.value.length == 0){
		alert(helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	return true;
}

//sunarthsh pou elegxei an ena pedio periexei mono ari8mous
function isNumeric(elem, helperMsg){
	var numericExpression = /^[0-9]+$/;
	if(elem.value.match(numericExpression)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

//sunarthsh pou elegxei an ena pedio periexei mono xarakthres
function isAlphabet(elem, helperMsg){
	var alphaExp = /^[a-zA-Z]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

//sunarthsh pou elegxei an ena pedio periexei kai xarakthres kai noumera
function isAlphanumeric(elem, helperMsg){
	var alphaExp = /^[0-9a-zA-Z]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

//sunarthsh pou elegxei an to mhkos tou pediou kumenaitai meta3u tou min kai tou max
function lengthRestriction(elem, min, max,helperMsg){
	var uInput = elem.value;
	if(uInput.length >= min && uInput.length <= max){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

//sunarthsh pou elegxei an exei epilextei kati se ena select box
function madeSelection(elem, helperMsg){
	if(elem.value == "Please Choose"){
		alert(helperMsg);
		elem.focus();
		return false;
	}else{
		return true;
	}
}

//sunarthsh pou elegxei an ena email exei thn swsth morfh (px a@a.a)
function emailValidator(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}


/****************************************************************************************
*				SUNARTHSEIS ELEGXOU GIA TO REGISTRATION FORM
*
*****************************************************************************************/

//sunarthsh pou upologizei thn dunamikothta(?) tou kwdikou  REAL TIME
function RTpasswordChanged()
{
	var strength = document.getElementById('strength');
	var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*$", "g");
	var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
	var enoughRegex = new RegExp("(?=.{6,}).*", "g");
	var pwd = document.getElementById("pwd");
	if (pwd.value.length==0)
	{
		strength.innerHTML = '';
	}
	else if (false == enoughRegex.test(pwd.value))
	{
		strength.innerHTML = 'Πολύ μικρός!';
	}
	else if (strongRegex.test(pwd.value))
	{
		strength.innerHTML = '<span style="color:green">Δυνατός!</span>';
	}
	else if (mediumRegex.test(pwd.value))
	{
		strength.innerHTML = '<span style="color:orange">Μέτριος!</span>';
	}
	else
	{ 
		strength.innerHTML = '<span style="color:red">Αδύναμος!</span>';
	}
}

//sunarthsh pou epivlepei an oi 2 kwdikoi einai idioi  REAL TIME
function RTequalPasswords()
{
	var equal = document.getElementById('equal');
	var pwd = document.getElementById("pwd");
	var pwd2 = document.getElementById("pwd2");
	
	if(pwd2.value.length!=0)
	{
		if(pwd.value!=pwd2.value) equal.innerHTML = '<span style="color:red">Οι κωδικοί που έχετε βάλει δεν ταιριάζουν!</span>';
		else equal.innerHTML = '<span style="color:green">Oi κωδικοί ταιριάζουν!</span>';
	}
	else equal.innerHTML='';
}


//sunarthsh pou elegxei an ena email exei thn swsth morfh (px a@a.a) REAL TIME
function RTemailValidator()
{

	var email = document.getElementById('email');
	var mail = document.getElementById("mail");
	
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(mail.value.match(emailExp))
	{
		email.innerHTML = '<span style="color:green">Αποδεκτό email!</span>';
	}
	else
	{
		email.innerHTML = '<span style="color:red">To mail σας δεν έχει την σωστή μορφή!</span>';	
	}
}

//sunarthsh pou elegxei an ena pedio periexei mono ari8mous  REAL TIME
function RTisNumeric(elem,span){

	//var smob1 = document.getElementById("smob1");
	
	var numericExpression = /^[0-9]+$/;
	if(elem.value.match(numericExpression))
	{
		span.innerHTML = '<span style="color:green">Αποδεκτό τηλέφωνο!</span>';
	}
	else
	{
		span.innerHTML = '<span style="color:red">Μη αποδεκτό τηλέφωνο!</span>';
	}
}

//sunarthsh pou elegxei pedia ari8mwn.An to who einai alh8es to pedio prepei na exei aparaithta 10 pshfia
//an to who einai false to pedio mporei na periexei 'h 0 pshfia(dld den exei eisax8ei tipota) 'h 10 pshfia.
function numberCheck(number,helpMsg,who)
{
	if(who==true)
	{
		var uInput=number.value;
		if(uInput.length==10)
		{
			if(isNumeric(number,helpMsg))
			{
				return true;
			}
		}
		else
		{
			alert(helpMsg);
			number.focus();
			return false;
		}
	}
	else
	{
		var uInput=number.value;
		if(uInput.length!=0)
		{
			if(uInput.length==10)
			{
				if(isNumeric(number,helpMsg))
				{
					return true;
				}
			}
			else
			{
				alert(helpMsg);
				number.focus();
				return false;
			}
		}
		else return true;
	}

}

//sunarthsh pou elegxei an oi ari8moi sto registration form einai swsta sumplhrwmenoi
function numbersCheck()
{
	var mob1phone=document.getElementById('mob1phone');
	var mob2phone=document.getElementById('mob2phone');
	var homephone=document.getElementById('homephone');
	var othrphone=document.getElementById('othrnumber');
	var msgPhone="Το ο αριθμός του τηλέφωνού σας θα πρέπει να έχει 10 ψηφία!";
	
	if(numberCheck(mob1phone,msgPhone,true))
	{
		if(numberCheck(mob2phone,msgPhone,false))
		{
			if(numberCheck(homephone,msgPhone,false))
			{
				if(numberCheck(othrphone,msgPhone,false))
				{
					return true;
				}
			}
		}
	}
	
	return false;
}

//sunarthsh pou elegxei an ola ta aparaithta pedia einai sumphrwmena sto registration form
function validEmptyRegForm()
{

	//alert("helooooooooo");

	// Make quick references to our fields
	var username = document.getElementById('username');
	var msgUsername="Δεν έχετε συμπληρώσει το username σας!";
	var pwd = document.getElementById('pwd');
	var msgPwd="Δεν έχετε συμπληρώσει τον κωδικό σας!";
	var pwd2 = document.getElementById('pwd2');
	var msgPwd2="Δεν έχετε συμπληρώσει τον δεύτερο κωδικό σας!";
	var mail=document.getElementById('mail');
	var msgMail="Δεν έχετε συμπληρώσει το email σας!";
	var mob1phone=document.getElementById('mob1phone');
	var msgmob1phone="Δεν έχετε συμπληρώσει το κινητό σας!";
	

	
	if(notEmpty(username,msgUsername))
	{
		if(notEmpty(pwd,msgPwd))
		{
			if(notEmpty(pwd2,msgPwd2))
			{
				if(notEmpty(mail,msgMail))
				{
					if(notEmpty(mob1phone,msgmob1phone))
					{
						return true;
					}
				}
			}
		}
	}
	
	
	return false;

}

//sunarthsh pou elegxei an ta pedia sto registration form einai swsta sumplhrwmena
function multiValidRegForm()
{


	// Make quick references to our fields
	var username = document.getElementById('username');
	var msgUsername="Το username σας θα πρέπει να αποτελείται μόνο από χαρακτήρες και αριθμούς!";
	var msgLenUsername="Το username σας θα πρέπει να αποτελείται από 4 εώς 16 χαρακτήρες!";
	
	var pwd = document.getElementById('pwd');
	var pwd2 = document.getElementById('pwd2');
	var msgLenPwd="Ο κωδικός θα πρέπει να έχει μήκος μεταξύ 4 και 16";
	
	var mail=document.getElementById('mail');
	var msgVMail="Δεν έχετε συμπληρώσει το email σας σωστά!";
	
	var mob1phone=document.getElementById('mob1phone');
	var mob2phone=document.getElementById('mob2phone');
	var homephone=document.getElementById('homephone');
	var othrphone=document.getElementById('othrnumber');
	var msgPhone="Το ο αριθμός του τηλέφωνού σας θα πρέπει να έχει 10 ψηφία!";


	//checking username
	if(isAlphanumeric(username,msgUsername))
	{
		if(lengthRestriction(username,4,16,msgLenUsername))
		{
			//checking password
			if((pwd.value) == (pwd2.value))
			{
				if(lengthRestriction(pwd,4,16,msgLenPwd))
				{
					//checking email
					if(emailValidator(mail,msgVMail))
					{
						//checking numbers
						if(numbersCheck())
						{
							return true;
						}
					}
				}
			}
			else alert("Οι κωδικοί σας είναι διαφορετικοί!");
		}
	}
	
	
	
	
	return false;
	

}

//sunarthsh pou elegxei to registration form
function validRegForm()
{

	if(validEmptyRegForm())
	{
		if(multiValidRegForm())
		{
			return true;
		}
	}
	return false;

}


/****************************************************************************************
*				SUNARTHSEIS ELEGXOU GIA TO FORMA ANAZHTHSHS
*
*****************************************************************************************/

function validSearch()
{

	var typos = document.getElementById('typos');
	var sell = document.getElementById("sell");
	var lent = document.getElementById("lent");

	if((sell.checked==true) || (lent.checked==true))
	{
		typos.innerHTML='<span style="color:green">&nbsp; &nbsp; &nbsp;  &#10003;</span>';
	}
	else
	{
		typos.innerHTML='<span style="color:red">&nbsp; &nbsp; &nbsp; Χ</span>';
	}
}
