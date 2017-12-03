<?php
$username = $_GET["username"];
$password = $_GET["password"];

class User {
    public $success = false;
    public $gallery = "";
}

$joe = new User();
$joe->gallery = "images/a.png";
$jane = new User();
$jane->gallery = "images/b.png";
$session_user = new User();

if ($username === "Joe" and $password === "joe123") {
    $session_user->success = true;
    $session_user->gallery = joe->gallery;
    echo json_encode($session_user);
}
if ($username === "Jane" and $password === "jane123") {
    $session_user->success = true;
    $session_user->gallery = jane->gallery;
}

if ($session_user->success === true) {
	return "sucessss";
}

?>