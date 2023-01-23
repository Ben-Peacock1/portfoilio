<?php
if (isset($_POST['send'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = 'bencnb8484@gmail.com';
  $subject = 'Form Submission';
  $message = "Name: ".$name."\n"."Email: ".$email."\n"."Wrote the following: "."\n\n".$message;
  $headers = "From: ".$email;

  if (mail($to, $subject, $message, $headers)) {
    echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
  } else {
    echo "Something went wrong!";
  }
}
?>
