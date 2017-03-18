<?php

// Get the form fields, removes html tags and whitespaces
$name = strip_tags(trim($_POST["name"]));
$name = str_replace(array("\r","\n"), array(" "," "), $name);
$phone = strip_tags(trim($_POST["phone"]));
$phone = str_replace(array("\r","\n"), array(" "," "), $phone);
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"]);

// Check the data
 if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: http://162.243.137.219/views/contact.php?success=-1#form");
//        header("Location: http://localhost/minerva/views/contact.php?success=-1#form");
        exit;
    }


// Set the recipient email address
$recipient = "noel@minervaconstructioninc.com;brian@minervaconstructioninc.com";

// Set the email subject
$subject = "New contact from $name";

// Build the email
$email_content = "Name: $name\n";
$email_content .= "Email address: $email\n";
$email_content .= "Phone number: $phone\n";
$email_content .= "Message: \n$message\n";

// Build the email headers
$email_headers = "From: $name <$email>";

// Send the mail
mail($recipient, $subject, $email_content, $email_headers);

// Redirect to the index.html page with success code
header("Location: http://162.243.137.219/views/contact.php?success=1#form");
//header("Location: http://localhost/minerva/views/contact.php?success=1#form");


?>