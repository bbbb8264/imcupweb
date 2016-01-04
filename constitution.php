<link rel="stylesheet" type="text/css" href="constitution.css">

<div id="currentpagedescription">競賽章程下載</div>
<div id="filecontainer">
	<?php
		if($handle = opendir("constitution")){
			while (false !== ($entry = readdir($handle))) {
				if($entry != "." && $entry != ".."){
					$entry = iconv('BIG5','UTF-8',trim($entry));
					echo '<a class="fileitem" href="constitution/'.$entry.'" download>
							<div class="fileicon">
								<img src="fileicon/pdf.png">
							</div>
							<div class="filename">
								'.$entry.'
							</div>
						</a>';
				}
			}
		}
		closedir($handle);
	?>
</div>