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

	// default Heroku Postgres configuration URL
    $dbUrl = getenv('DATABASE_URL');

    $dbopts = parse_url($dbUrl);

    $dbHost = $dbopts["host"];
    $dbPort = $dbopts["port"];
    $dbUser = $dbopts["user"];
    $dbPassword = $dbopts["pass"];
    $dbName = ltrim($dbopts["path"],'/');

    try {
    	$db = new PDO("pgsql:host=$dbHost;port=$dbPort;dbname=$dbName", $dbUser, $dbPassword);
    }
    catch (PDOException $ex) {
    	print "<p>error: $ex->getMessage() </p>\n\n";
        die();
    }

    if(isset($_POST['login'])){

		$username = $_POST['username'];

		$password = $_POST['password'];
echo "<p>we got the username and password</p><br>";
		try
		{
			$query = "SELECT password, user_id FROM users WHERE username = $username";
   			$statement = $db->query($query);
echo "<p>We got to the query</p><br>";
   
   			$row = $statement->fetch(PDO::FETCH_ASSOC);
echo "<p>We got the row</p>";

   			$valid = password_verify($password, $row['password']);
echo "<p>We validated</p>";
   			$user_id = $row['user_id'];
echo "<p>We set the session</p>";
   			if ($valid) {
      			$_SESSION['user_id'] = $user_id;
echo "<p>They matched!</p><br>";
      			header("refresh:5;url=update.php");
   			} else {
echo "<p>They didn't match</p>";
      			header("refresh:5;url=login.php");
   			}
	
		}
		catch (Exception $ex)
		{
			// Please be aware that you don't want to output the Exception message in
			// a production environment
			echo "Error with DB. Details: $ex";
			die();
		}


	}

?>


</body>
</html>