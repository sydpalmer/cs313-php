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

    if($_SESSION['user_id'] == 1){
    	$choice = 'SP';
    }else{
    	$choice = 'JP';
    }
?>
<!DOCTYPE html>
<html>
<head>
   <title>Update</title>
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
</head>
<body>

<h1>Update info</h1>
<div>
	<select name="option">
      <?php
      	foreach ($db->query("SELECT * FROM shipping WHERE trucker_initials = '$choice'") as $row)
        {
          if ($row[4] == '1'){
            $prod = 'bracelet';
          } else if ($row[4] == '2'){
            $prod = 'necklace';
          } else if ($row[4] == '3'){
            $prod = 'earring';
          }

          echo "<option>$row[0]: Driver - $row[1], Van - $row[2], Date - $row[3], Product: $prod</option>";
        }
      ?>
    </select>
</div>
<?php  ?>

</body>
</html>