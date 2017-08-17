$(document).ready(function(){

  function generateGrid( size = 30){
		for(var i = 0; i < size; i++){
		  $("#gridcontainer").append("<div class='row text-center'>");
			for(var j = 0; j < size; j++){
				$('.row').last().append("<div class='unit float'></div>");
			}
			$("#gridcontainer").append("</div>");
		}
	}

	generateGrid();

	var color = 'white'

	//reset button
	$('#reset').on('click', function(){
		$('.unit').css('background-color', 'white');
		color = 'white';
	});

	//change grid dimension button
	$('#newGrid').on('click', function(){

		var userValue = 0;
		do {
			userValue = prompt("Enter grid size between 1 and 40");
		} while (userValue < 1 || userValue > 40);

			var newGridSize = parseInt(userValue);
			$('#gridcontainer').empty();
			generateGrid(newGridSize);

	});

  // random color button
	$('#randomColor').on('click', function(){
		var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		color = hue;
		$('.currentcolor').css('background-color', hue);
	});

	//paints grid items on mouse over
	$('#gridcontainer').on('mouseover', 'div.unit', function(){
		$(this).css('background-color', color);
	});
});
