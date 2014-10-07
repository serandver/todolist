$(document).ready(function() {

	//default quantity 
	var arrayCheckbox = $('.task-todo');
	$('.item span').text(arrayCheckbox.length);
	$('.completed-item span').text('0');

	//line-through selected item
 	$('.wrapper-checkbox input').click(function() {
   		$(this).parent('div').parent('div').children('.task-todo').toggleClass('selected');
	
		//items left to do
		var arraySelected = $('.selected');	
		var itemsLeft = arrayCheckbox.length - arraySelected.length;
  		$('.item span').text(itemsLeft);	
	
		//clear items
  		var clearItem = arraySelected.length;
		$('.completed-item span').text(clearItem);
   	});
  	
  	//editable todo
  	

}); //end ready