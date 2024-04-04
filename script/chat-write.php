<?php
$message = $_POST['teks'] ?? '';
$username = $_POST['username'] ?? '';

if (!empty($message)) {
  $file = fopen("chat.txt", "a"); // Open the file in append mode
  $data = json_encode(["username" => $username, "message" => $message]); // Encode data to JSON format
  fwrite($file, $data . "\n"); // Write the data to the file
  fclose($file); // Close the file
  echo "Pesan tertulis di file chat.txt"; // Respond to the client
} else {
  echo "Menerima pesan kosong"; // Respond to the client if no message is received
}
?>
