<?php
$login = $_GET["credentials"];

class User {
    public $success = false;
    public $gallery = "";
}

if ($username === "Joe" and $password === "joe123") {
    $user1 = new User();
    $user1->success = true;
    $user1->gallery = gousie;
}

if ($username === "Jane" and $password === "jane123") {
    $user1 = new User();
    $user1->success = true;
    $user1->gallery = jane;
}

?>