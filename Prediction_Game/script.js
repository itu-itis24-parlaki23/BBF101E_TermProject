const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("restart-button");
const score = document.getElementById("score");

let hidden_word = "blink";
let lives = 3;
let array = [0, 0, 0, 0, 0];
let char_found = 0;

submitButton.addEventListener("click", () => {
    resetButton.classList.remove("hidden");

    const word = userInput.value.toLowerCase();
    
    let index = hidden_word.indexOf(word);

    if(word.length == 1){
        if(index < 0){
            lives -= 1;
            erase_life_img();
            if(lives <= 0){
                submitButton.classList.add("hidden");
                alert("You lost!");
            }
        }else{
            if(array[index] == 0){
                make_card_visible(index);
                array[index] = 1;
                char_found += 1;
                score.innerText = parseInt(score.innerText) + 20;
                if(char_found == 5){
                    submitButton.classList.add("hidden");
                    alert("You won!");
                }
            }else{
                alert("Letter already found!");
            }
        }
    }else if(word.length == 5){
        if(index < 0){
            submitButton.classList.add("hidden");
            alert("You lost!");
        }else{
            score.innerText = 100;
            for(let i = 0; i < hidden_word.length; i++){
                make_card_visible(i);
            }
            submitButton.classList.add("hidden");
            alert("You won!");
        }
    }else if(!word.length){
        alert("Enter a letter or a prediction!");
    }else{
        submitButton.classList.add("hidden");
        alert("You lost!");
    }

    userInput.value = ""
});

resetButton.addEventListener("click", () => {
    userInput.value = "";
    score.innerText = 0;
    lives = 3;
    char_found = 0;
    isCorrect = false;
    array = [0, 0, 0, 0, 0];
    reset_life_img();
    make_cards_hidden();
    submitButton.classList.remove("hidden");
    resetButton.classList.add("hidden");
});

function erase_life_img() {
    const lifeImages = document.querySelectorAll(".live img");
    if (lives >= 0 && lives < lifeImages.length) {
        lifeImages[lives].style.visibility = "hidden";
    }
}

function reset_life_img() {
    const lifeImages = document.querySelectorAll(".live img");
    for(let i = 0; i < lifeImages.length; i++){
        lifeImages[i].style.visibility = "visible";
    }
}

function make_card_visible(index) {
    const cards = document.querySelectorAll(".cards .card")
    cards[index].classList.add("visible");
}

function make_cards_hidden() {
    const cards = document.querySelectorAll(".cards .card")
    for(let i = 0; i < cards.length; i++){
        cards[i].classList.remove("visible");
    }
}