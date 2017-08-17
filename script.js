$(document).ready(function(){

  function generateGrid( size = 30){
		for(var i = 0; i < size; i++){
		  $("#gridcontainer").append("<div class='row'>");
			for(var j = 0; j < size; j++){
				$('.row').last().append("<div class='unit float'></div>");
			}
			$("#gridcontainer").append("</div>");
		}
	}

	generateGrid();

	var color = 'white'

	$('#reset').on('click', function(){
		// $('.unit').removeClass('color');
		$('.unit').css('background-color', 'white');
		color = 'white';
	});

	$('#newGrid').on('click', function(){

		var userValue = 0;
		do {
			userValue = prompt("Enter grid size between 1 and 40");
		} while (userValue < 1 || userValue > 40);

			var newGridSize = parseInt(userValue);
			$('#gridcontainer').empty();
			generateGrid(newGridSize);

	});

	$('#randomColor').on('click', function(){
		var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		// $('.color').css('background-color', hue);
		color = hue;
	});

	$('#gridcontainer').on('mouseover', 'div.unit', function(){
		// $(this).addClass('color');
		$(this).css('background-color', color);
	});
});
