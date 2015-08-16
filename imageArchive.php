<?php
$dir = 'imageArchive';
$images = scandir($dir, 1);
echo '[';
$outputed = false;
foreach ($images as $image)
{
	if (is_dir($image))
		continue;
	if ($outputed)
		echo ',';
	echo '{';
	echo '"url": "'.$dir.'/'.urlencode($image).'",';
	echo '"name": "'.pathinfo($image, PATHINFO_FILENAME).'"'; 
	echo '}';
	$outputed = true;
}
echo ']';
?>
