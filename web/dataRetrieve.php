<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Database Information</title>
  <style>
    table{
      border: 2px solid black;
    }
    th{
      background-color: #c4c4c4;
      font-size:110%;
      padding: 3px;
    }
  </style>
</head>
<body>

  <table align="center">
    <tr style="text-align: center;">
      <td colspan="10" style="padding:8px; font-size:125%">
	<form>
	  Search by: <select name="option">
	    <option value="id">ID</option>
  	  <option value="driver_initials">Driver's Initials</option>
 	    <option value="tractor_number">Tractor Number</option>
  	  <option value="trailer_number">Trailer Number</option>
	    <option value="month_year">Date</option>
  	  <option value="temperature">Temperature</option>
      <option value="product_id">Product</option>
	  </select>&emsp;
	  Input what to search for: <input type="text" name="input" id="input" size="18" autofocus>
	  <input type="submit" value="Submit" name="submit"/>
      </td>
    </tr>
    <tr style="text-align: center;">
      <td colspan="10" style="padding:8px; font-size:125%">
	<input type="submit" value="Get All Entries" name="allEntries"/>
        </form>
      </td>
    </tr>
    <tr style="text-align: center;">
      <th>ID</th>
      <th>Driver's Initials</th>
      <th>Tractor Number</th>
      <th>Trailer Number</th>
      <th>Date</th>
      <th>Temperature</th>
      <th>Product</th>
    </tr>
    <?php
      
        $user = 'postgres';
        $password = 'postgres';
        $dbconn = pg_connect("dbname=log");
      if(! $dbconn){
        echo 'Error!: ' . $ex->getMessage();
        die();
      }

      if(isset($_GET['allEntries'])){
        $whole_sql = "SELECT * FROM shipping";
        $whole_result = pg_query($dbconn, $whole_sql);
echo "<tr><td>got result. Here's query: " . $whole_sql . "</td></tr>";
        if (!$whole_result) {
          die ('Could not run query');
        }

        while($whole_row = pg_fetch_array($whole_result)){
          if ($whole_row[6] == '1'){
            $prod = 'bracelet';
          } else if ($whole_row[6] == '2'){
            $prod = 'necklace';
          } else{
            $prod = 'earring';
          }
          echo "<tr style='text-align: center;'>";
          echo "<td>$whole_row[0]</td>";
          echo "<td>$whole_row[1]</td>";
          echo "<td>$whole_row[2]</td>";
          echo "<td>$whole_row[3]</td>";
          echo "<td>$whole_row[4]</td>";
          echo "<td>$whole_row[5] &deg;F</td>";
          echo "<td>$prod</td>";
          echo "</tr>";
        }
echo "<tr><td>Just finished the while loop.</td></tr>";
      } else if (isset($_GET['submit'])){

        //Get input
        $input = $_GET['input'];
        $col = $_GET['option'];
echo "<tr><td>Got input and the column.</td></tr>";

        //Get the row that's associated with the manifest number
        $sql = "SELECT * FROM shipping WHERE $col = '$input'";
        $result = pg_query($sql);
echo "<tr><td>Got result. Query: " . $sql . "</td></tr>";
        if (!$result) {
          die ('Could not run query');
        }

        while($row = pg_fetch_array($result)){
          if ($row[6] == '1'){
            $prod = 'bracelet';
          } else if ($row[6] == '2'){
            $prod = 'necklace';
          } else{
            $prod = 'earring';
          }
          echo "<tr style='text-align: center;'>";
          echo "<td>$row[0]</td>";
          echo "<td>$row[1]</td>";
          echo "<td>$row[2]</td>";
          echo "<td>$row[3]</td>";
          echo "<td>$row[4]</td>";
          echo "<td>$row[5] &deg;F</td>";
          echo "<td>$prod</td>";
          echo "</tr>";
        }
echo "<tr><td>Finished the while loop</td></tr>";
      }

    ?>
  </table>
</body>
</html>
