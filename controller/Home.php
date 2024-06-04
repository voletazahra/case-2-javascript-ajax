<?php

class Home
{

  private $model;
  private $content;

  public function __construct()
  {
    require 'model/Model.php';
    $this->model = new Model;
  }

  function chat()
  {
    include "view/chat.php";
  }

  function asset(){
    include "asset/foto-orang.png";
  }

  function submit()
  {
    $message = $_POST['text'];
    $username = $_POST['username'];
    $this->model->write($message, $username); 
  }

  function read() {
    $this->content = $this->model->read(); 
    $messages = [];
    while ($row = $this->content->fetch_assoc()) {
      $messages[] = [
        'username' => $row['username'],
        'content' => $row['content']
      ];
    }
    echo json_encode($messages); 
  }
  
  
}