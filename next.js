// JavaScript Document

$(document).ready ( function () {
	
	
	var imagelink="images/";
	var counter=1;
	$("#right").click (  function () {
		
		
		
		if(counter<5){
			counter++;
		$("#gallery img").attr('src', imagelink+counter+".jpg");
		
		}
		}); 
		
	$("#left").click (  function () {
		
		
		
		if(counter>1){
			counter--;
		$("#gallery img").attr('src', imagelink+counter+".jpg");
		}
		}); 
	});