<?php
$author = "Roman";
$sentence1 = <<<_END
Developers, Developers, developers, developers, developers,
developers, developers, developers, developers!
- $author.\n
_END;
$sentence2 = "one two three
four, five six";
echo $sentence1;
echo $sentence2;
// $author = "Brian W. Kernighan";
// echo <<<_END
// Debugging is twice as hard as writing the code in the first place.
// Therefore, if you write the code as cleverly as possible, you are,
// by definition, not smart enough to debug it.
// - $author.
// _END;
?>