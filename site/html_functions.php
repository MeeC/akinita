<?php
function do_html_header($header)
{
?>
<html>
<head>
<title>The real estate project!</title>
</head>
<body>

<div id="menu" align="right" >
<a href=""target="_blank">A�����</a> | 
<a href="">
<select>
	<option>���������</option>
	<option>�������</option>
	<option>M� �������� ��������</option>
	</select></a> | 
<a href=""target="_blank">Contact Us</a> |
<a href=""target="_blank">���� ������</a>
</div>
<?php
	if($title)
	{
	?>
		<h2><?php echo $header;?></h2>
	<?php
	}
}
?>


<?php
function do_html_login()
{
?>
<h1>�������� ������ ��������</h1>
	<h2>*Log in</h2>
	<h3>Eisai melos? kane log in!</h3>
	<form method="post" action="login.php">
		Username: <input type="text" name="firstname"/><br />
		Password: <input type="password" name="pwd" /><br />
		<input type="submit" value="Log in" />
	</form>

	<h3>Not a member?</h3>
	<form><input type="submit" value="Sign in" /></form>
<?php
}
?>