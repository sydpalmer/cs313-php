<!DOCTYPE html>
<html>
<head>
   <title>Log in</title>
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
</head>
<body>

<h1>Sign-In</h1>
<form method="post">
   <input type="text" name="username" id="username" placeholder="Username"><br>
   <input type="password" name="password" id="password" placeholder="Password"><br>
   <button type="submit" name="login">Submit</button>
</form>

<?php
	session_start();

?>


</body>
</html>