<?php
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

  //Get all the data from the web form
  $initials=test_input($_POST['driverInitial']);
  $van_number=test_input($_POST['vanNum']);
  $month_year=test_input($_POST['pickupDate']);
  $product=test_input($_POST['product']);

  //Function to make sure each piece of data has no illegal characters
  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

  //Insert into the table in the database
  $sql = "INSERT INTO shipping (trucker_initials, van_number, month_year, product_id) 
  VALUES('$initials', '$van_number', '$month_year', '$product')";

$result = $db->query($sql);

echo "Entered data successfully\n";
header("refresh:5;url=dataRetrieveTest.php");

die(); // we always include a die after redirects.

?>
