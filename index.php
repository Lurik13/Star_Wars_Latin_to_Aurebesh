<?php
$main_colour = "#3561e4";
$parentheses_colour = "#f1c232";
$text = file_get_contents("text.txt");
$text = str_replace(["(", ")", "\n"], ["<span>(", ")</span>", "<br>"], $text);

function addEmojiClass($text) {
    $emoji_pattern_special = '/[\x{1F923}]/u'; 
    $text = preg_replace($emoji_pattern_special, '<span class="emoji">$0</span>', $text);
    $emoji_pattern = '/[\x{1F600}-\x{1F64F}]/u'; 
    return preg_replace($emoji_pattern, '<span class="emoji">$0</span>', $text);
}

$text = addEmojiClass($text);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Aurebesh mode</title>
    <link rel="icon" type="image/x-icon" href="Aurek.svg">
    <style>
        @font-face {
            font-family: Aurebesh;
            src: url(Aurebesh.otf);
        }
        body {
            background-color: black;
            border: 2px solid #9b0000;
            margin: 15px auto;
            padding: 20px;
            max-width: 777px;
            color: <?php echo $main_colour; ?>;
            text-align: justify;
            line-height: 27px;
            font-size: 30px;
            font-family: Aurebesh;
            font-variant: small-caps;
        }
        span {
            color: <?php echo $parentheses_colour; ?>;
            font-size: 17px;
        }
        b {
            font-family: Arial, sans-serif;
            font-variant: normal;
            font-size: 17px;
            letter-spacing: 1px;
            display: inline;
        }
        .emoji {
            font-size: 0.6em;
        }
    </style>
</head>
    <body>
        <?php 
            echo $text;
        ?>
    </body>
</html>