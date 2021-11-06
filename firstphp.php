<?php
function test(){
    static $count = 0;
    echo $count;
    $count += 1;
}
echo $_SERVER;
?>