$(document).ready(function() {

	//default quantity 
	var arrayCheckbox = $('#content .checkbox');
	$('.item span').text(arrayCheckbox.length);
	$('.completed-item span').text('0');

	//line-through selected item
 	$('.checkbox input').click(function() {
   		$(this).closest('div').toggleClass('selected');
	
		//items left to do
		var arraySelected = $('#content .selected');	
		var itemsLeft = arrayCheckbox.length - arraySelected.length;
  		$('.item span').text(itemsLeft);	
	
		//clear items
  		var clearItem = arraySelected.length;
		$('.completed-item span').text(clearItem);
   	});
  	
  	//editable todo
  	

}); //end ready