const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit-button");
const score = document.getElementById("score");

let hidden_word = "blink";
let lives = 3;
let array = [0, 0, 0, 0, 0];
let char_found = 0;

submitButton.addEventListener("click", () => {
    const word = userInput.value.toLowerCase();
    
    let index = hidden_word.indexOf(word);

    if(word.length == 1){
        if(index < 0){
            lives -= 1;
            erase_life_img();
        }else{
            if(array[index] == 0){
                make_card_visible(index);
                array[index] = 1;
                char_found += 1;
                score.innerText = parseInt(score.innerText) + 20;
                if(char_found == 5){
                    alert("You won!");
                }
            }else{
                alert("Letter already found!");
            }
        }
    }else if(word.length == 5){
        if(index < 0){
            alert("You lost!");
            finish_game();
        }else{
            score.innerText = 100;
            alert("You won!");
        }
    }

    userInput.value = ""
});

function erase_life_img() {
    const lifeImages = document.querySelectorAll(".live img");
    if (lives >= 0 && lives < lifeImages.length) {
        lifeImages[lives].style.visibility = "hidden";
    }
}

function make_card_visible(index) {
    const cards = document.querySelectorAll(".cards .card")

    cards[index].classList.add("visible");
}