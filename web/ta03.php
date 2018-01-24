<?php
	$name = $_POST["name"];
	$email = $_POST["email"];
	$major = $_POST["major"];
	$comments = $_POST["comments"];

	echo "<b>Your name is: </b>" . $name . "<br><b>Your email is: </b>" . $email . " <a href='mailto:" . $email . "'>" . "Send mail!" . "</a>" . "<br><b>Your major is: </b>" . $major . "<br><b>Comments: </b>" . $comments . "<br>";
	if(!empty($_POST["continent"])){
		echo "<b>You have visited: </b>" . "<ul>";
		foreach ($_POST["continent"] as $selected) {
			echo "<li>" . $selected . "</li>";
		}
		echo "</ul>";
	}
?>