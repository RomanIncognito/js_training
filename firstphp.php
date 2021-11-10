<?php
    function capevery($input_string){
        $temp_list = explode(" ", $input_string);
        foreach($temp_list as $k => $v){
            $t = strtolower($v);
            $temp = str_split($t);
            $temp[0] = strtoupper($temp[0]);
            $temp_list[$k] = join($temp);
        }
    }

    strtolower("something");
?>