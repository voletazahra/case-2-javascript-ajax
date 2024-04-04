<?php
$files = fopen("chat.txt", "r");

while(($line = fgets($files)) != false) {
    echo $line;
}

fclose($files);
