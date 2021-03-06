<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="https://www.freelogoservices.com/api/main/ph/zjHl2lgef9cYrQL0JFa7kzbw2vuDpR5PnxvE3jd9OXdE9g5shnN1i...Bv9ettdV9dsBUGw0pY">
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
    <form>
    <tr style="text-align: center;">
      <td colspan="10" style="padding:8px; font-size:125%">
    Search by: <select name="option">
      <option value="trucker_initials">Driver's Initials</option>
      <option value="van_number">Van Number</option>
      <option value="month_year">Date</option>
      <option value="product_id">Product</option>
    </select>&emsp;
    Input what to search for: <input type="text" name="input" id="input" size="18" autofocus>
    <input type="submit" value="Submit" name="submit"/>
      </td>
    </tr>
    <tr style="text-align: center;">
      <td colspan="10" style="padding:8px; font-size:125%">
  <input type="submit" value="Get All Entries" name="allEntries"/>
      </td>
    </tr>
    </form>
    <tr style="text-align: center;">
      <th>Driver's Initials</th>
      <th>Van Number</th>
      <th>Date</th>
      <th>Product</th>
    </tr>

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

      if(isset($_GET['allEntries'])){

        foreach ($db->query('SELECT * FROM shipping') as $whole_row)
        {
          if ($whole_row[4] == '1'){
            $prod = 'bracelet';
          } else if ($whole_row[4] == '2'){
            $prod = 'necklace';
          } else{
            $prod = 'earring';
          }
          echo "<tr style='text-align: center;'>";
          echo "<td>$whole_row[1]</td>";
          echo "<td>$whole_row[2]</td>";
          echo "<td>$whole_row[3]</td>";
          echo "<td>$prod</td>";
          echo "</tr>";
        }

      } else if (isset($_GET['submit'])){
        //Get input
        $input = $_GET['input'];
        $col = $_GET['option'];

        if($col == 'product_id'){
          if($input == 'bracelet'){
            $input = '1';
          }else if($input == 'necklace'){
            $input = '2';
          }else if($input == 'earring'){
            $input = '3';
          }
        }
        
        foreach ($db->query("SELECT * FROM shipping WHERE $col = '$input'") as $row){
          if ($row[4] == '1'){
            $prod = 'bracelet';
          } else if ($row[4] == '2'){
            $prod = 'necklace';
          } else if ($row[4] == '3'){
            $prod = 'earring';
          }
          echo "<tr style='text-align: center;'>";
          echo "<td>$row[1]</td>";
          echo "<td>$row[2]</td>";
          echo "<td>$row[3]</td>";
          echo "<td>$prod</td>";
          echo "</tr>";
        }
      }
?>
</table>
<br>
  <div style="text-align: center;">
    <form action="login.php">
      <input type="submit" name="update" value="Update Record">
    </form>
  </div>
</body>
</html>