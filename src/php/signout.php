<?php
require_once 'common.php';


    $_SESSION['id'] = NULL;
    $_SESSION['class'] = NULL;
    $_SESSION['role'] = NULL;
    $_SESSION['name'] = NULL;


if( $_SESSION['id'] == NULL &&  $_SESSION['class'] == NULL && $_SESSION['class'] == NULL &&  $_SESSION['name'] == NULL)  success('');

else ero('70','fail');
