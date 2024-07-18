<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['message-name'];
    $email = $_POST['message-email'];
    $subject = $_POST['message-subject'];
    $message = $_POST['message-message'];

    $to = "nadeerabinoli@gmail.com"; // Replace with your email address
    $email_subject = "New Message from Contact Form: $subject";
    $email_body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again.";
    }
}
?>
