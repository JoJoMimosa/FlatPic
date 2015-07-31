<?php
// INDEX.PHP
// Main page of the gallery

// Generates a string that contains the filename of each picture
// by scanning the folder that contains the full-sized images.
$dir = realpath(dirname(__FILE__)).'/full';
$files = scandir($dir, 1);
// Does this array need to be defined beforehand?
$img_array = [];
foreach($files as $file) {
	if(stripos($file, '.jpg') !== false) {
		$img_array[] = "'".$file."'";
	}
}
$array_str = implode(',', $img_array);
?>
<!doctype html>
<html>
	<head>
		<title>FlatPic - Demo</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link href='http://fonts.googleapis.com/css?family=Raleway:500' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<script type="text/javascript">
			var img_array = [<?= $array_str; ?>];
			var img_copy = [<?= $array_str; ?>];
		</script>
	</head>
	<body>
		<div id="display">
			<div id="prev" onclick="prevIMG()">❮</div>
			<div id="next" onclick="nextIMG()">❯</div>
			<img onclick="closeDisplay()" src="svg/cross.svg" id="cross">
			<div id="mask"></div>
		</div>
		<header><a href="/">FlatPic - Demo</a></header>
		<div id="container"></div>
		<footer>
			©  <?php echo date("Y");?> FlatPic - Design by <a href="//github.com/jojomimosa">JoJoMimosa</a>
		</footer>
		<script type="text/javascript" src="js/script.js"></script>
	</body>
</html>