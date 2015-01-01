$(document).ready(function() {


	todolist = {
		title: "Todolist",
		newTaskTitle: null,
		itemsLeftCount: 0,
		itemsCompletedCount: 0,
		itemTemplate: null,
		init: function() {
			var itemsCount = $('.task-todo').length;
			this.itemsCompletedCount = $('.itemDone').length;
			this.itemsLeftCount = itemsCount - this.itemsCompletedCount;
			this.itemTemplate = $("#itemtemplate");
			$('.item span').text(this.itemsLeftCount);
			$('.completed-item span').text(this.itemsCompletedCount);
		},
		addNewItem: function() {
			var textNewTask = $("#newItem").val();
			if (textNewTask == "What needs to be done?") {   
				alert("Please write your task");
			}
			else if (textNewTask !== "") {
				$("#mytasks").append(
					_.template( $("#itemtemplate").html(), {taskTitle: textNewTask})
				);
				this.itemsLeftCount += 1;
				$("#newItem").val("What needs to be done?");
				this.init();
			}
			else {
				alert("Please write your task");
			};
		},
		
		pullDataToServer: function() {

		},
		getDataFromServer: function() {

		},
	}; 	

	//set empty field on focus, default field on blur
	$('#newItem').focus(function() {
		if (this.value=='What needs to be done?') {this.value=''}     
	});
	$('#newItem').blur(function() {
		if (this.value=='') {this.value='What needs to be done?'}     
	});



	//event "add a new task on click" handler
	$("#add").click( function() {
		todolist.addNewItem();
	});

	//event "set a task done" handler
	$('#mytasks').on("click", "input", function() {   
			$(this).parent('div').parent('div').children('.task-todo').toggleClass('itemDone'); 
			todolist.itemsCompletedCount += 1;
			todolist.itemsLeftCount = todolist.itemsLeftCount - 1;
			todolist.init();
	});

	//event "clear done tasks" handler
	$(".completed-item").click(function () {           
		$(".itemDone").parent('div').remove();
		todolist.itemsCompletedCount = 0;
		todolist.init();
	});

	todolist.init();

	task = {
		taskText: null,
		taskStatus: null,

	};
	
	virtualServer = [];


}); //end ready