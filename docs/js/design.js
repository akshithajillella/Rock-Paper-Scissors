function getRandom(array) {
  return array[Math.floor(Math.random() * (array.length) )];
}

function displayRndm(compPick, pickRndm) {
	compPick = getRandom(list);
		switch(compPick){
			case 'rock': pickRndm.innerHTML = '<img src="img/rock.png" alt="rock" id="pick-rndm">'; break;
			case 'paper': pickRndm.innerHTML = '<img src="img/paper.png" alt="paper" id="pick-rndm">'; break;
			case 'scissors': pickRndm.innerHTML = '<img src="img/scissors.png" alt="scissors" id="pick-rndm">'; break;
		}
}

function setUserPick(userPick, choice) {
	if (userPick === 'rock') {
		choice.innerHTML = '<img src="img/rock.png" alt="rock" class="img" id="pick-rock">';
	} else if (userPick === 'paper') {
		choice.innerHTML = '<img src="img/paper.png" alt="paper" class="img" id="pick-paper">';
	} else {
		choice.innerHTML = '<img src="img/scissors.png" alt="scissors" class="img" id="pick-scissors">';
	}
	var img = document.querySelector(".img");
	img.style.cssText = 'width: 150px; height:150px; transform: none;'
}


const list = ["rock", "paper", "scissors"];

var userPick = null;
var compPick = null;

var pickRndm = document.getElementById('blank-img');
var choice = document.getElementById('choice');

var playButton = document.getElementById('button');

var result = null;


choice.addEventListener('click', function(evt) {
	if (evt.target.nodeName.toLowerCase() === 'img') {
		userPick = evt.target.alt;
		setUserPick(userPick, choice);
	}
})


playButton.addEventListener('click', function (){
	if (userPick === null) {
		alert("Please select first")
	}
	else {
		displayRndm(compPick, pickRndm);
	}
	setTimeout( function(){
    	result = compare(userPick, compPick);
		alert(result);
  	}, 500 );
});


var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    }

    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "You win!";
        } else {
            return "You lose! Try again.";
        }
    }

    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "You win!";
        } else {
            return "You lose! Try again.";
        }
    }

    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "You lose! Try again.";
        } else {
            return "You win!";
        }
    }
};