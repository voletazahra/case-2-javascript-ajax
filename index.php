<?php
$info = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : '';
$parts = explode("/", trim($info, "/"));

$controller = array_shift($parts);
$method = array_shift($parts);
$params = $parts;

if (!$controller) {
    die("Controller tidak ditemukan.");
}

$controller = ucfirst($controller);
$controllerFile = "controller/" . $controller . ".php";

if (!file_exists($controllerFile)) {
    die("File controller tidak ditemukan: " . $controllerFile);
}

require_once($controllerFile);

if (!class_exists($controller)) {
    die("Class controller tidak ditemukan: " . $controller);
}

$c = new $controller();

if (!method_exists($c, $method)) {
    die("Method tidak ditemukan di controller: " . $method);
}

$c->$method(...$params);
?>
