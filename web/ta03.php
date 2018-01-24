<?php
	$name = $_POST["name"];
	$email = $_POST["email"];
	$major = $_POST["major"];
	$comments = $_POST["comments"];

	echo "Your name is: " . $name . "<br>Your email is: " . $email . " <a href='mailto:" . $email . "'>" . "Send mail!" . "</a>" . "<br>Your major is: " . $major . "<br>Comments: " . $comments . "<br>";
	if(!empty($_POST["continent"])){
		echo "You have visited: <br>";
		foreach ($_POST["continent"] as $selected) {
			echo $selected . "<br>";
		}
	}
?>