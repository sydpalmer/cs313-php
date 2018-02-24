<!DOCTYPE html>
<html>
<head>
   <title>Teach 07</title>
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
</head>
<body>

<h1>Sign-In</h1>
<form method="post">
   <input type="text" name="username" id="username" placeholder="Username">
   <input type="password" name="password" id="password" placeholder="Password">
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

    if(isset($_POST['login']){

		$username = $_POST['username'];

		$password = $_POST['password'];

		try
		{
			$query = 'SELECT password, user_id FROM users WHERE username = :username';
   			$statement = $db->prepare($query);
   
			$statement->bindValue(':username', $username);

   			$statement->execute();
   			$row = $statement->fetch(PDO::FETCH_ASSOC);

   			$valid = password_verify($password, $row['password']);

   			$user_id = $row['user_id'];

   			if ($valid) {
      			$_SESSION['user_id'] = $user_id;
      			header("Location: update.php");
   			} else {
      			header("Location: login.php");
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