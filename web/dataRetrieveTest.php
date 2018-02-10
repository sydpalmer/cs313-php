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

    <?php

      // default Heroku Postgres configuration URL
      $dbUrl = getenv('DATABASE_URL');

      $dbopts = parse_url($dbUrl);

      print "<p>Database URL: $dbUrl</p>\n\n";

      $dbHost = $dbopts["host"];
      $dbPort = $dbopts["port"];
      $dbUser = $dbopts["user"];
      $dbPassword = $dbopts["pass"];
      $dbName = ltrim($dbopts["path"],'/');

      print "<p>pgsql:host=$dbHost;port=$dbPort;dbname=$dbName</p>\n\n";

      try {
        $db = new PDO("pgsql:host=$dbHost;port=$dbPort;dbname=$dbName", $dbUser, $dbPassword);
      }
      catch (PDOException $ex) {
        print "<p>error: $ex->getMessage() </p>\n\n";
        die();
      }

      foreach ($db->query('SELECT * FROM shipping') as $row)
      {
        print "<p>Printing rows: $row[1]</p>\n\n";
      }

?>
</body>
</html>