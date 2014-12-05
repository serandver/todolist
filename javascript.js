$(document).ready(function() {

	var myTasks = []; //создаем пустой массив будущих заданий
	$('.completed-item span').text('0');  //обнуляем счетчики
	$('.item span').text('0');                 //обнуляем счетчики

	$('#newItem').focus(function() {
		if (this.value=='What needs to be done?') {this.value=''}     //очищаем поле ввода при фокусе курсора
	});
	$('#newItem').blur(function() {
		if (this.value=='') {this.value='What needs to be done?'}     //восстанавливаем подсказку в поле ввода при расфокусировке
	});


	$("#add").click(function () {                     // события по клику на кнопку add

		if ($("#newItem").val() == "What needs to be done?") {    //проверка ошибочной кнопки "add"
			alert("Вы не ввели новое задание!");
		}




		else if ($("#newItem").val() !== "") {
			var e = $("#newItem").val();
			function newTask (e) {     //создаем конструктор объектов - наших новых заданий
				this.todo = e;
				this.status = false;
			};
			var myTask = new newTask(e);   //создаем новый объект с значением свойства todo, равное значению поля ввода
			myTasks[myTasks.length] = myTask;  //добавляем новое задание в конец массива

			$("#mytasks").append('<div class="wrapper-task"><div class="wrapper-checkbox"><input type="checkbox"/></div><div class="task-todo">' + e + '</div></div>'); //добавляем задание в конец списка
			$("#newItem").val("What needs to be done?");  //поле ввода в исходное положение

			var arrayCheckbox = $('.task-todo');
			$('.item span').text(arrayCheckbox.length); //счетчик общего количества заданий +1

			$('#mytasks').on("click", "input", function() {                                                 //присваиваем класс .selected по щелчку на чекбокс
				$(this).parent('div').parent('div').children('.task-todo').toggleClass('selected'); 
				var arraySelected = $('.selected');	
				var itemsLeft = arrayCheckbox.length - arraySelected.length;
			  	$('.item span').text(itemsLeft);	             //счетчик общего количества заданий -1
				//clear items
			  	var clearItem = arraySelected.length;
				$('.completed-item span').text(clearItem);       //счетчик выполненых заданий +1
			});

			$(".completed-item").click(function () {
			      $(".selected").parent('div').remove();
			      $('.completed-item span').text('0');
			    });



		} 


		else {
			alert("Вы не ввели новое задание!")
		}; //проверка на пустое поле

		

	})
}); //end ready