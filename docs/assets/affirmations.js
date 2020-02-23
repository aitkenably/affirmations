
function sample(values) {
	return values[Math.floor(Math.random() * values.length)];
}

function getData() {
	fetch('/affirmations/data/affirmations.json')
	  .then((response) => {
	    return response.json();
	  })
	  .then((affirmations) => {
		  let affirmation = sample(affirmations);		  
		  var ele = document.getElementById("affirmation");
		  ele.textContent = affirmation;
	  });
}


window.onload = function() {	
	getData();
}