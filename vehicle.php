<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $Lname = strip_tags(trim($_POST["Lname"]));
				$Lname = str_replace(array("\r","\n"),array(" "," "),$Lname);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = trim($_POST["phone"]);
        $plate = trim($_POST["plate"]);
        $model = trim($_POST["model"]);
        $make = trim($_POST["make"]);
        $color = trim($_POST["color"]);

        $location = trim($_POST["location"]);
        $unit = trim($_POST["unit"]);
        $duration = trim($_POST["duration"]);
        $time = trim($_POST["time"]);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($Lname) OR empty($phone) OR empty($plate) OR empty($model) OR empty($make) OR empty($color) OR empty($location) OR empty($unit) OR empty($duration)OR empty($time) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "edris0804@gmail.com";

        // Set the email subject.
        $subject = "New contact from $name";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content = "Last Name: $Lname\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Phone Number: $phone\n\n\n";

        $email_content .= "Plate Number: $plate\n";
        $email_content .= "Vehicle Model: $model\n";
        $email_content .= "Vehicle Make: $make\n";
        $email_content .= "Vehicle Color: $color\n\n\n";


        $email_content .= "Location: $location\n";
        $email_content .= "Unit Number Visiting: $unit\n";
        $email_content .= "Duration: $duration\n\n\n";

        $email_content .= "Current time: $time\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
