window.onload = function (){
	var board = document.getElementById("board").querySelectorAll("div"), play = 0;
	var i;
	for (i = 0; i < board.length; i++) {
		board[i].setAttribute("class", "square");
	}

	var count = new Array();

	for (var p = 0; p < board.length; p++){
		board[p].addEventListener("mouseover", function (){
			this.classList.add("hover");
		});
			
		board[p].addEventListener("mouseout", function (){
			this.classList.remove("hover");
		});	

		board[p].onclick = function() {
			if (this.innerHTML !== "X" && this.innerHTML !== "O"){
				if(play%2 === 0){
					this.innerHTML = "X";
					this.classList.add("square","X");
					winner();
					play += 1;
					count.push("X");
					console.log(count);
				}else {
					this.innerHTML = "O";
					this.classList.add("square","O");
					winner();
					play += 1;				
					count.push("O");
					console.log(count);
				}
		};
	}
}
        function winner() {
            const winningCombinations = [
                [0, 1, 2],
                [0, 3, 6],
                [0, 4, 8],
                [3, 4, 5],
                [6, 7, 8],
                [1, 4, 7],
                [2, 5, 8],
                [2, 4, 6]
            ];

            for (const combo of winningCombinations) {
                const [a, b, c] = combo;
                if (
                    board[a].innerHTML !== "" &&
                    board[a].innerHTML === board[b].innerHTML &&
                    board[a].innerHTML === board[c].innerHTML
                ) {
                    const fin = count[count.length - 2];
                    const status = document.getElementById("status");
                    status.innerHTML = `Congratulations! ${fin} is the Winner!`;
                    status.className = "you-won";
                    break;
                }
            }
        }

	// function winner(){
	// 	if(board[0].innerHTML !== "" && board[0].innerHTML === board[1].innerHTML && board[0].innerHTML === board[2].innerHTML ){
	// 		var fin = count[count.length - 2];	
	// 		document.getElementById("status").innerHTML = "Congratulations! " + fin + " is the Winner!";
	// 		document.getElementById("status").className=("you-won");

	// 	} else if (board[0].innerHTML !== "" && board[0].innerHTML === board[3].innerHTML && board[0].innerHTML === board[6].innerHTML){
	// 		var fin = count[count.length - 2];	
	// 		document.getElementById("status").innerHTML = "Congratulations! " + fin + " is the Winner!";
	// 		document.getElementById("status").className=("you-won");

	// 	}else if (board[0].innerHTML !== "" && board[0].innerHTML === board[4].innerHTML && board[0].innerHTML === board[8].innerHTML){
	// 		var fin =count[count.length - 2];	
	// 		document.getElementById("status").innerHTML = "Congratulations! " + fin + " is the Winner!";
	// 		document.getElementById("status").className=("you-won");

	// 	} else if (board[3].innerHTML !== "" && board[3].innerHTML === board[4].innerHTML && board[3].innerHTML === board[5].innerHTML){
	// 		var fin = count[count.length - 2];	
	// 		document.getElementById("status").innerHTML = "Congratulations! " + fin + " is the Winner!";
	// 		document.getElementById("status").className=("you-won");

	// 	} else if (board[6].innerHTML !== "" && board[6].innerHTML === board[7].innerHTML && board[6].innerHTML === board[8].innerHTML){
	// 		var fin = count[count.length - 2];	
	// 		document.getElementById("status").innerHTML = "Congratulations! " + fin + " is the Winner!";
	// 		document.getElementById("status").className=("you-won");
			
	// 	} else if (board[1].innerHTML !== "" && board[1].innerHTML === board[4].innerHTML && board[1].innerHTML === board[7].innerHTML){
	// 		var fin = count[count.length - 2];	
	// 		document.getElementById("status").innerHTML = "Congratulations! " + fin + " is the Winner!";
	// 		document.getElementById("status").className=("you-won");
			
	// 	} else if (board[2].innerHTML !== "" && board[2].innerHTML === board[5].innerHTML && board[2].innerHTML === board[8].innerHTML){
	// 		var fin = count[count.length - 2];	
	// 		document.getElementById("status").innerHTML = "Congratulations! " + fin + " is the Winner!";
	// 		document.getElementById("status").className=("you-won");

	// 	}else if (board[2].innerHTML !== "" && board[2].innerHTML === board[4].innerHTML && board[2].innerHTML === board[6].innerHTML){
	// 		var fin = count[count.length - 2];	
	// 		document.getElementById("status").innerHTML = "Congratulations! " + fin + " is the Winner!";
	// 		document.getElementById("status").className=("you-won");
	// 	}

	// }
	var btn = document.querySelector("button");
	btn.addEventListener("click",function(){
		window.location.reload();		
	})	
}
	

