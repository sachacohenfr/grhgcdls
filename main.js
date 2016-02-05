$(function () {
	$("meta[content='IE=EmulateIE7']").attr('content', '');
	$( "<img src='https://cdn.rawgit.com/sachacohenfr/grhgcdls/master/postit.png' id='rever' />" ).insertAfter( ".mainContent" );
	$('h1:contains("ACCUEIL")').css('opacity', '0');
	$('.bonjour').replaceWith('<img src="https://cdn.rawgit.com/sachacohenfr/grhgcdls/master/bonjour.png" id="BonjourImg" alt="Bonjour," />');
	$('.menu ul.menuLevel1 a.menuItemLevel1Highlight, .menu ul.menuLevel2 a.menuItemLevel2Highlight').css('background-color', '#00A2E3');
	//$('.menu ul.menuLevel1 a.menuVisible:hover, .menu ul.menuLevel2 a.menuVisible:hover')
	$('.menuVisible').css('border-radius', '0px');
	$('.mainContent').attr('bgcolor', '#FFFFFF');
	$('.menuPosition').css('background-image', 'url(https://rawgit.com/sachacohenfr/grhgcdls/master/bg-menu.png)');
	$('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/sachacohenfr/grhgcdls/master/style.css">');
	$('head').append("<link href='https://fonts.googleapis.com/css?family=Dosis:400,600' rel='stylesheet' type='text/css'>");
	$( "<div id='SoleadFooter'><div><img src='https://rawgit.com/sachacohenfr/grhgcdls/master/cegibat.jpg' id='cegibat' alt='Logo' /><img src='https://rawgit.com/sachacohenfr/grhgcdls/master/grdf.jpg' id='grdf' alt='Logo' /></div></div>" ).insertAfter( ".globalTable" );

});