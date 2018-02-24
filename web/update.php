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
   <style type="text/css">
   table{
      border: 2px solid black;
    }
    </style>
</head>
<body>

<h1>Update info</h1>
<div>
      <?php
      echo "<select name='id'>";
      	foreach ($db->query("SELECT * FROM shipping WHERE trucker_initials = '$choice'") as $row)
        {
          if ($row[4] == '1'){
            $prod = 'bracelet';
          } else if ($row[4] == '2'){
            $prod = 'necklace';
          } else if ($row[4] == '3'){
            $prod = 'earring';
          }

          echo "<option value='" . $row[0] . "'>$row[0]: Driver - $row[1], Van - $row[2], Date - $row[3], Product: $prod</option>";
        }
        echo "</select>";
      ?>
</div>
<br><br>
<div>
	<table>
    <form>
    	<tr style="text-align: center;">
    		<td colspan="10" style="padding:8px; font-size:125%">
    		Update: <select name="option">
      			<option value="trucker_initials">Driver's Initials</option>
      			<option value="van_number">Van Number</option>
      			<option value="month_year">Date</option>
      			<option value="product_id">Product</option>
    		</select>&emsp;
    		Change to: <input type="text" name="input" id="input" size="18" autofocus>
    		For record: <input type="number" name="record" id="record" size="2em">
    		<input type="submit" value="Update" name="submit"/>
      		</td>
    	</tr>
    </form>
	</table>

</div>
<?php
	//Get all the data from the web form
  	$option = $_GET['option'];
  	$record = $_GET['record'];
  	$input = $_GET['input'];

  	//Function to make sure each piece of data has no illegal characters
  	function test_input($data) {
    	$data = trim($data);
    	$data = stripslashes($data);
    	$data = htmlspecialchars($data);
    	return $data;
  	}

	if($option == 'product_id'){
    	if($input == 'bracelet'){
        	$input = '1';
    	}else if($input == 'necklace'){
        	$input = '2';
    	}else if($input == 'earring'){
        	$input = '3';
    	}
  	}

if(isset($_GET['submit'])){
  	//Update the table in the database
  	$sql = "UPDATE shipping SET $option='$input' WHERE id='$record'";

  	$result = $db->query($sql);

	echo "Updated data successfully\n";
	header("refresh:5;url=dataRetrieveTest.php");
	die(); // we always include a die after redirects.
}
?>

</body>
</html>