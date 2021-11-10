<?php
    $the_string = "Roman Nester Vasyl";
    $the_list = explode(" ", $the_string);
    foreach ($the_list as $k => $v){
        echo $v;
    }
    $the_list2 = str_split($the_string, 3);
    foreach($the_list2 as $k => $v){
        echo $v."\n";
    }
?>