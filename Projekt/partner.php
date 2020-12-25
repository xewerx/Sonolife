<?
	require_once('admin/db.php');


	list($banURL)	= mysql_fetch_row(mysql_query('SELECT ban_url FROM ' .DEF_TAB_banery. ' WHERE ban_id = ' .$_GET['id']. ' AND ban_cms_id = ' .DEF_cmsID ));

	if ($banURL <> '') {
		mysql_query('UPDATE ' .DEF_TAB_banery. ' SET ban_licznik = ban_licznik + 1 WHERE ban_id = ' .$_GET['id']. ' AND ban_cms_id = ' .DEF_cmsID );

		if (substr($banURL,0, 1) == '/') {
			header('Location: http://' . $_SERVER['SERVER_NAME'] . $banURL);
		} else {
			header('Location: http://' .str_replace('http://' ,'', $banURL));
		}


	} else {
		header('Location: http://' .$domena);
	}
?> 
