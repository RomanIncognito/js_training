<?php
<<<<<<< HEAD
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
=======
$first = FALSE;
if ($first == TRUE OR $name == "Roman") {
    echo "name is not checked";
}
>>>>>>> 1cee6d01159e33783aedc445a2254ed65e485959
?>