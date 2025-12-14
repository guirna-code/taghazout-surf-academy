
<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "yahyaguirnaoui@gmail.com"; // Your email
    $subject = "New Contact Form Submission";

    // Get form data safely
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Build the email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    // Use a verified sender from your domain
    $from = "tahasurfcoach.com"; 
    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $email\r\n";

    if(mail($to, $subject, $body, $headers)) {
        echo "<h2>Thank you! Your message has been sent.</h2>";
        echo "<p><a href='contact.html'>Back to Contact Page</a></p>";
    } else {
        echo "<h2>Sorry, something went wrong. Please try again.</h2>";
        echo "<p><a href='contact.html'>Back to Contact Page</a></p>";
    }
} else {
    // Redirect to contact page if accessed directly
    header("Location: contact.html");
    exit();
}
?>

