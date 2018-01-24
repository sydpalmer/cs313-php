<?php
	$name = $_GET["name"];
	$email = $_GET["email"];
	$major = $_GET["major"];
	$comments = $_GET["comments"];

	echo "Your name is: " . $name . "<br>Your email is: " . $email . "<a href='mailto:" . $email . "'>" . "<br>Your major is: " . $major . "<br>Comments: " . $comments;
?>