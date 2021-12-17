<?php
class Translate
{
    public $name, $age;

    public function __construct(string $iname, int $iage)
    {
        $this->name = $iname;
        $this->age = $iage;
    }
    
    const ENGLISH =0;
    const SPANISH =1;
    const FRENCH  =2;
    const GERMAN  =3;

    static function lookup()
    {
        return self::SPANISH;
    }
}

    echo Translate::lookup();
    echo Translate::lookup();
    echo "\n";
    $my_translate = new Translate("Roman", 25);
    print_r($my_translate);
?>