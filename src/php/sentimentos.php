<?php
$max_length = 100;
$remaining_chars = $max_length - strlen($_POST['myTextarea']);
echo "$remaining_chars characters remaining";
?>