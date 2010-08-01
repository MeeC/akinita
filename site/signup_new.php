<?php
  // include function files for this application
  require_once('includes.php');

  //create short variable names
  $username=$_POST['username'];
  $passwd=$_POST['pwd'];
  $passwd2=$_POST['pwd2'];
  $email=$_POST['mail'];
  $home=$_POST['homephone'];
  $mob1=$_POST['mob1phone'];
  $mob2=$_POST['mob2phone'];
  $othr=$_POST['othrnumber'];
  $frst=$_POST['frstname'];
  $lst=$_POST['lstname'];
  // start session which may be needed later
  // start it now because it must go before headers
  session_start();
  
  try
  {
    // check forms filled in
    /*if (!filled_out($username) || !filled_out($passwd) || !filled_out($passwd2) || !filled_out($email) || !filled_out($mob1))
    {
      throw new Exception('You have not filled the form out correctly - please go back and try again.');    
    }*/
   
    // email address not valid
    /*if (!valid_email($email))
    {
      throw new Exception('That is not a valid email address.  Please go back  and try again.');
    }*/ 

    // passwords not the same 
    if ($passwd != $passwd2)
    {
      throw new Exception('The passwords you entered do not match - please go back and try again.');
    }

    // check password length is ok
    // ok if username truncates, but passwords will get
    // munged if they are too long.
    if (strlen($passwd)<4 || strlen($passwd) >16)
    {
      throw new Exception('Your password must be between 4 and 16 characters.Please go back and try again.');
    }
	if (strlen($mob1)!=10)
    {
      throw new Exception('Your mobile phone must have exactly 10 digits.');
    }
	
	// attempt to register
    // this function can also throw an exception
    register($username, $passwd, $email);
	// provide link to login page
    dispHeader('Registration successful',2);
    echo 'Your registration was successful.  Go to login page to enter into the system!';
    dispURL('login.php', 'Go to login page');
   
   // end page
   dispFooter();
  }
  catch (Exception $e)
  {
     dispHeader('Error:');
     echo $e->getMessage(); 
     dispFooter();
     exit;
  } 
	
?>