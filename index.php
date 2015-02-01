<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Project Documentation</title>
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<link rel="stylesheet" href="lib/css/styles.css">
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="lib/js/jquery-1.10.2.min.js"><\/script>')</script>
	</head>
	<body>
		<section id="mdDocTOC">
			<h1>Table of Contents</h1>
			<ol class="big">
			<?php
			/**
			 * Document listing
			 */
			$files = glob( 'docs/*.html' );
			$strip = array( 'docs/', '.html' );
			foreach( $files as $file ) {
				echo '<li><a href="' . $file . '">' . str_replace( $strip, '', $file) . '</a></li>';
			}
			?>
			</ol>
		</section>
	</body>
</html>