$(document).ready(function() {
/*
	
  	
*/
	var myTasks = []; //создаем пустой массив будущих заданий
	$('.completed-item span').text('0');  //обнуляем счетчики
	$('.item span').text('0');


	$("#add").click (function () {
		if ($("#newItem").val() !== "") {
			var e = $("#newItem").val();
			function newTask (e) {     //создаем конструктор объектов - наших новых заданий
				this.todo = e;
				this.status = false;
			};
			var myTask = new newTask(e);   //создаем новый объект с значением свойства todo
			myTasks[myTasks.length] = myTask;  //добавляем новое задание в конец массива
		} 
		else {alert("Вы не ввели новое задание!")};

		$("#mytasks").append('<div class="wrapper-task"><div class="wrapper-checkbox"><input type="checkbox"/></div><div class="task-todo">' + e + '</div></div>'); //добавляем задание в конец списка
		$("#newItem").val("What need to been done?");

		var arrayCheckbox = $('.task-todo');
		$('.item span').text(arrayCheckbox.length); //счетчик количества заданий
		$('#mytasks').on("click", "input", function() {
			$(this).parent('div').parent('div').children('.task-todo').toggleClass('selected'); 
			var arraySelected = $('.selected');	
			var itemsLeft = arrayCheckbox.length - arraySelected.length;
		  	$('.item span').text(itemsLeft);	
			//clear items
		  	var clearItem = arraySelected.length;
			$('.completed-item span').text(clearItem);
		})
		


			
			//items left to do
			
			
	})

	    
	
//default quantity 


//line-through selected item

  	

}); //end ready