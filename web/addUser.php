<?php

$passwordHash = password_hash('guestpassword', PASSWORD_DEFAULT);

echo "we're updating users<br>";
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

try
{
	$query = "INSERT INTO users (username, password) VALUES('guest', :passwordHash)";
	$statement = $db->prepare($query);
   
	$statement->bindValue(':passwordHash', $passwordHash);

	$statement->execute();
	
}
catch (Exception $ex)
{
	// Please be aware that you don't want to output the Exception message in
	// a production environment
	echo "Error with DB. Details: $ex";
	die();
}
echo "completed!";
?>