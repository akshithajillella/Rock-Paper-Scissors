function getRandom(array) {
  return array[Math.floor(Math.random() * (array.length) )];
}

function displayRndm(compPick, pickRndm) {
	compPick = getRandom(options);
	if (compPick === 'rock') {
		pickRndm.innerHTML = '<img src="img/rock.png" alt="rock" class="pick-rndm">';
	} else if (compPick === 'paper') {
		pickRndm.innerHTML = '<img src="img/paper.png" alt="paper" class="pick-rndm">';
	} else {
		pickRndm.innerHTML = '<img src="img/scissors.png" alt="scissors" class="pick-rndm">';
	}
		// switch(compPick){
		// 	case 'rock': pickRndm.innerHTML = '<img src="img/rock.png" alt="rock" class="pick-rndm">'; break;
		// 	case 'paper': pickRndm.innerHTML = '<img src="img/paper.png" alt="paper" class="pick-rndm">'; break;
		// 	case 'scissors': pickRndm.innerHTML = '<img src="img/scissors.png" alt="scissors" class="pick-rndm">'; break;
		// }
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


const options = ["rock", "paper", "scissors"];

var userPick = null;
var compPick = null;

var pickRndm = document.getElementById('blank-img');
var choice = document.getElementById('choice');

var playButton = document.getElementById('button');


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
    	var result = compare(userPick, compPick);
		alert(result);
  	}, 500 );
});


var compare = function(userPick,compPick) {
    if (userPick === compPick) {
        return "It's a tie!";
    }

    else if (userPick === "rock") {
        if (compPick === "scissors") {
            return "You win!";
        } else {
            return "You lose! Try again.";
        }
    }

    else if (userPick === "paper") {
        if (compPick === "rock") {
            return "You win!";
        } else {
            return "You lose! Try again.";
        }
    }

    else if (userPick === "scissors") {
        if (compPick === "rock") {
            return "You lose! Try again.";
        } else {
            return "You win!";
        }
    }
};