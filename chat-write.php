<?php
$message = $_POST['teks'] ?? '';

if (!empty($message)) {
  $file = fopen("chat.txt", "a"); // Open the file in append mode
  fwrite($file, $message . "\n"); // Write the message to the file
  fclose($file); // Close the file
  echo "Pesan tertulis di file chat.txt"; // Respond to the client
} else {
  echo "Menerima pesan kosong"; // Respond to the client if no message is received
}
?>
