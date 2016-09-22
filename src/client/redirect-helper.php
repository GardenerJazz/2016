<?php
    $path = $_GET['path'];

    if ($path !== '') {
        redirect('http://' . $_SERVER['HTTP_HOST'] . '#' . $path);
    }

    function redirect($url, $permanent = false) {
        header('Location: ' . $url, true, $permanent ? 301 : 302);
        exit();
    }
?>
