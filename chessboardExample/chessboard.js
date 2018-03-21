
var board  = "";
var rows = 0;

while(rows < 8) {
	var cols = 0;

	var previousHashed;

	if(rows % 2 === 0 ) {
		previousHashed = true
	} else {
		previousHashed = false;
	}

	while(cols < 8) {


		if(previousHashed) {
			board += ' ';
		} else {
			board += '#';
		}


		previousHashed = !previousHashed;
		cols++;
	}

	board += "\n";
	rows++;
}

console.log(board);
