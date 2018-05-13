<!DOCTYPE html>
<html>
<body>
<table>
<?php
try
{
  $user = 'postgres';
  $password = 'SydGrad2014';
  $db = new PDO('pgsql:host=localhost;dbname=StoriesDB', $user, $password);
}
catch (PDOException $ex)
{
  echo 'Error!: ' . $ex->getMessage();
  die();
}
echo "<tr><td>Connected!</td></tr>";

$db->query('\c StoriesDB');

$whole_sql = "SELECT * FROM stories";
echo "<tr><td>SQL command was created</td></tr>";

$whole_result = $db->query($whole_sql);
if (!$whole_result) {
  die ('Could not run query');
}
echo "<tr><td>got result. Here's query: " . $whole_sql . "</td></tr>";

while($whole_row = $whole_result->fetch_array(PDO::FETCH_ASSOC)){
  echo "<tr style='text-align: center;'>";
  echo "<td>$whole_row[1]</td>";
  echo "<td>$whole_row[2]</td>";
  echo "<td>$whole_row[3]</td>";
  echo "</tr>";
}
echo "<tr><td>Just finished the while loop.</td></tr>";
?> 
</table>
</body>
</html>