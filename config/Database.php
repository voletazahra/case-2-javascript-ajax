<?php
class Database {
    private $dbhostname = 'localhost';
    private $dbusername = 'root';
    private $dbpassword = 'rahasia';
    private $dbname = 'chat';
    public $dbconn;

    public function __construct() {
        $this->dbconn = new mysqli(
            $this->dbhostname,
            $this->dbusername,
            $this->dbpassword,
            $this->dbname
        );

        if ($this->dbconn->connect_errno) {
            die('Database connection error: ' . $this->dbconn->connect_error);
        }
    }
}
?>
