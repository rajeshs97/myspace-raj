/*

My Custom JS
============

Author:  Rajesh
Updated: August 2016

*/
$(document).ready(function()
{
	$('#alertMe').click(function()
	{
		$('#successAlert').show();
	})
})

$(function()
{
	$("[data-hide]").on("click",function()
	{
		$(this).closest("."+$(this).attr("data-hide")).hide();
	});
});

$(function() {
	
	/*$('#alertMe').click(function(e) {
		
		e.preventDefault();
		
		$('#successAlert').slideDown();
		
	});
	
	$('a.pop').click(function(e) {
		e.preventDefault();
	});
	
	$('a.pop').popover();*/
	
	$('[rel="tooltip"]').tooltip();
	
	
	$('#first-image').attr("height","197px"); 	
	$('#first-image').mouseover(function()
	{
	   $(this).css("cursor","pointer");
	   $(this).animate({height: "500px"}, 'slow');

	});
	$('#first-image').mouseout(function()
	{
	   $(this).animate({height: "197px"}, 'slow');
	});

	$('#second-image').attr("height","197px"); 	
	$('#second-image').mouseover(function()
	{
	   $(this).css("cursor","pointer");
	   $(this).animate({height: "500px"}, 'slow');

	});
	$('#second-image').mouseout(function()
	{
	   $(this).animate({height: "197px"}, 'slow');
	});

	$('#third-image').attr("height","197px"); 	
	$('#third-image').mouseover(function()
	{
	   $(this).css("cursor","pointer");
	   $(this).animate({height: "500px"}, 'slow');

	});
	$('#third-image').mouseout(function()
	{
	   $(this).animate({height: "197px"}, 'slow');
	});


});
