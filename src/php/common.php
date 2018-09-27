<?php

header("Content-type: text/html; charset=utf-8");
session_start();
error_reporting( E_ALL&~E_NOTICE );
class CodeUtil
{
    public static function jsons_encode($array)
    {
        //遍历已有数组，将每个值 urlencode 一下
        foreach ($array as $key => $value) {
            if(is_string($value))
                $array[$key] = urlencode($value);
        }
        //用urldecode将值反解
        return $array;
    }
}


class LoginCheck
{
    public static function checklogin(){
        if($_SESSION['id']==""||$_SESSION['role']==""||$_SESSION['id']=="")
        response('20','loginfail','');
    }

}


function response($code,$msg,$data){
    $response = array(
        'code' => $code,
        "msg"=>$msg,
        'data'=>$data
        );
    $response = CodeUtil::jsons_encode($response);
    header("Content-Type:text/html;charset=utf-8");
    die (urldecode(json_encode($response)));
}


function connfail(){
    response('10','connectfail','');
}

function success($data){
    response('0','success',$data);
}

function existempty(){
     response('77','empty','');
}

function ero($code,$msg){
    response($code,$msg,'');
}

?>