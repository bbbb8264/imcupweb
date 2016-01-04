<?php
	if(unlink('basketballannouncedata/'.$_POST['id'].'/'.iconv('UTF-8','BIG5',trim($_POST['filename'])))){
		$fi = new FilesystemIterator('basketballannouncedata/'.$_POST['id'], FilesystemIterator::SKIP_DOTS);
		if(iterator_count($fi)< 1){
			rmdir('basketballannouncedata/'.$_POST['id']);
		}
		echo 'success';
	}else{
		echo 'error';
	}
?>