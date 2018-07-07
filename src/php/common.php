<?php
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

?>