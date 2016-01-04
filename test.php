<?php 
	$fi = new FilesystemIterator('mainannouncedata/10', FilesystemIterator::SKIP_DOTS);
	printf("There were %d Files", iterator_count($fi));
?>