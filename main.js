$(function () {
	$("meta[content='IE=EmulateIE7']").attr('content', '');
	$( "<img src='https://sachacohenfr.github.io/grhgcdls/postit.png' id='rever' />" ).insertAfter( ".mainContent" );
	$('h1:contains("ACCUEIL")').css('opacity', '0');
	$('.bonjour').replaceWith('<img src="https://sachacohenfr.github.io/grhgcdls/bonjour.png" id="BonjourImg" alt="Bonjour," />');
	$('.menu ul.menuLevel1 a.menuItemLevel1Highlight, .menu ul.menuLevel2 a.menuItemLevel2Highlight').css('background-color', '#00A2E3');
	//$('.menu ul.menuLevel1 a.menuVisible:hover, .menu ul.menuLevel2 a.menuVisible:hover')
	$('.menuVisible').css('border-radius', '0px');
	$('.mainContent').attr('bgcolor', '#FFFFFF');
	$('.menuPosition').css('background-image', 'url(https://sachacohenfr.github.io/grhgcdls/bg-menu.png)');
	$('head').append('<link rel="stylesheet" type="text/css" href="https://sachacohenfr.github.io/grhgcdls/style.css">');
	$('head').append("<link href='https://fonts.googleapis.com/css?family=Dosis:400,600' rel='stylesheet' type='text/css'>");
	$( "<div id='SoleadFooter'><div><img src='https://sachacohenfr.github.io/grhgcdls/cegibat.jpg' id='cegibat' alt='Logo' /><img src='https://sachacohenfr.github.io/grhgcdls/grdf.jpg' id='grdf' alt='Logo' /></div></div>" ).insertAfter( ".globalTable" );

});
