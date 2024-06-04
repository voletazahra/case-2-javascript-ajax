<?php
require 'config/Database.php';

Class Model{
    private $dbconn;

    public function __construct(){
        $database = new Database;
        $this->dbconn = $database->dbconn;
    }

    public function write($content, $username){
        $stmt = $this->dbconn->prepare("INSERT INTO message (username, content) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $content);
        $stmt->execute();
        $stmt->close();
    }

    public function read(){
        $sql = "SELECT * FROM message";
        return $this->dbconn->query($sql);
    }
}
?>
