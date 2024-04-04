<?php
$lines = file("chat.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES); // Read lines from file into an array

$username = null; // Initialize username variable

foreach ($lines as $line) {
  $data = json_decode($line, true); // Decode JSON data
  if ($data !== null) { 
    $username = $data['username']; 
    $message = $data['message']; 
    //format pesan
    echo "$message\n";
   
  }
}

// Output username separately
echo ("|||");
echo $username;
?>
