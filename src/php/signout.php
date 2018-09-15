<?php
require_once 'common.php';
header("Content-type: text/html; charset=utf-8");
session_start();


    $_SESSION['id'] = NULL;
    $_SESSION['class'] = NULL;
    $_SESSION['role'] = NULL;
    $_SESSION['name'] = NULL;


if( $_SESSION['id'] == NULL &&  $_SESSION['class'] == NULL && $_SESSION['class'] == NULL &&  $_SESSION['name'] == NULL){

      $response = array(
             'code' => 0,
             "msg"=>"success"
              );

            $response = CodeUtil::jsons_encode($response);
            header("Content-Type:text/html;charset=utf-8");
            echo urldecode(json_encode($response));


}


else {  $response = array(
             'code' => 70,
             "msg"=>"fail"

              );
            $response = CodeUtil::jsons_encode($response);
            header("Content-Type:text/html;charset=utf-8");
            echo urldecode(json_encode($response));}


