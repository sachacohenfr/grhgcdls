$(function () {
	$("meta[content='IE=EmulateIE7']").attr('content', '');
	$( "<img src='https://cdn.rawgit.com/sachacohenfr/shorlgead/master/postit.png' id='rever' />" ).insertAfter( ".mainContent" );
	$('h1:contains("ACCUEIL")').css('opacity', '0');
	$('.bonjour').replaceWith('<img src="https://cdn.rawgit.com/sachacohenfr/shorlgead/master/bonjour.png" id="BonjourImg" alt="Bonjour," />');
	$('.menu ul.menuLevel1 a.menuItemLevel1Highlight, .menu ul.menuLevel2 a.menuItemLevel2Highlight').css('background-color', '#00A2E3');
	//$('.menu ul.menuLevel1 a.menuVisible:hover, .menu ul.menuLevel2 a.menuVisible:hover')
	$('.menuVisible').css('border-radius', '0px');
	$('.mainContent').attr('bgcolor', '#FFFFFF');
	$('.menuPosition').css('background-image', 'url(https://rawgit.com/sachacohenfr/shorlgead/master/bg-menu.png)');
	$('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/sachacohenfr/shorlgead/master/style.css">');
	$('head').append("<link href=//fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'>");
	$( "<div id='SoleadFooter'><div><img src='https://rawgit.com/sachacohenfr/shorlgead/master/cegibat.jpg' id='cegibat' alt='Logo' /><img src='https://rawgit.com/sachacohenfr/shorlgead/master/grdf.jpg' id='grdf' alt='Logo' /></div></div>" ).insertAfter( ".globalTable" );
	
});
