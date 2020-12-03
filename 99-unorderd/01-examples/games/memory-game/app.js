// dom event lister
document.addEventListener('DOMContentLoaded',() =>  {

// // ---[Card Option]----//

// base url
const baseUrl = "https://ofekbytes.github.io/assets/icons/png/100x100-pixels/";

// // ---[array of cards with names]---
const cardArray = [
    {
        name: "40",
        img: baseUrl + "40.png"
    },
    {
        name: "40",
        img: baseUrl + "40.png"
    },
    {
        name: "41",
        img: baseUrl + "41.png"
    },
    {
        name: "41",
        img: baseUrl + "41.png"
    },
    {
        name: "42",
        img: baseUrl + "42.png"
    },
    {
        name: "42",
        img: baseUrl + "42.png"
    },
    {
        name: "43",
        img: baseUrl + "43.png"
    },
    {
        name: "43",
        img: baseUrl + "43.png"
    },
    {
        name: "44",
        img: baseUrl + "44.png"
    },
    {
        name: "44",
        img: baseUrl + "44.png"
    },
    {
        name: "45",
        img: baseUrl + "45.png"
    },
    {
        name: "45",
        img: baseUrl + "45.png"
    }
];


//random the card array (Card shuffling)
cardArray.sort(() => 0.5 - Math.random());


// // ---[create a game board]----

// using querySelector to pickup the element with class name '.grid' 
// '.grid' from html -to- '.grid' in javaScript file.
// '.grid' (html -> javascript)
const grid = document.querySelector('.grid')

const resultDisplay = document.querySelector('#result');

var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];


////
//// createBoard()
////
function createBoard() {

    for(let i=0; i < cardArray.length; i++) {
        // 1. // loop the 'cardArray'
        // 2. // for each card i will create an image element
        var card = document.createElement('img');

        // each card set attribute (background card)
        card.setAttribute ('src',baseUrl + 'rse-1.png');

        // each card have data-id (0-1), 12 cards
        card.setAttribute('data-id',i);

        // adding event listener - click event, calling flipcard() function
        card.addEventListener('click', flipcard);

       //// attention ////
       //// all this card will let/Light up image element with different 'id' we created, 
       //// will be placed inside html div class 'grid' using 'appendchild()'
        grid.appendChild(card);

    }   
}

/*
* flipcard - flip you'r card 
*/
function flipcard() {

    // variable 'cardId' equal "this" is getting the data from the attribute from the 'createBoard()' function;.
    var cardId = this.getAttribute('data-id');

    // using 'push' we will push the card from the 'cardArray' based on the 'cardId'
    // tip: 'cardArray'=4, the  =  5 card in our 'cardArray'
    // with 'cardId' we will get the 'name'
    // into the 'cardsChosen' array
    cardsChosen.push(cardArray[cardId].name);

    // get 'cardId' into 'cardsChosenId' array
    cardsChosenId.push(cardId);

    // we have a card picked - this.setAttribute  will add an image to the square based on the 'cardId' it hold
    this.setAttribute('src',cardArray[cardId].img);


    //console.log(cardId);

    // we want to choose 2 card in our card array
    // if cardsChosen equal to 2 will execute function 'checkForMatch'
    // after delay of 500 milisecond (0.5 second).
    if (cardsChosen.length === 2 ){
        setTimeout(checkForMatch, 500)
    }
  

}

/*
* checkForMatch - check For Match 
*/
function checkForMatch() {
    // pickup all the images that we have created in our first function using 'querySelectorAll'
    // we 2 value in our card value array (card chosen array) + card choosen id array

    // card chosen array
    var cards = document.querySelectorAll('img');

    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];


    // for(let test=0; test < cardsChosen.length; test++) {
    //     console.log(cardsChosen[test]);
    // }

    console.log(cardsChosen[0]  + " ==== " + cardsChosen[1] );

    if (optionOneId == optionTwoId)
    {
        cards[optionOneId].setAttribute('src',baseUrl + 'rse-1.png');
        cards[optionTwoId].setAttribute('src',baseUrl + 'rse-1.png');
        // alert('clicked twice the same card');

    }
    else if (cardsChosen[0] === cardsChosen[1]) {
        //True - equal value is true (match)
        // alert("Match");

        // set white image 
        cards[optionOneId].setAttribute('src', baseUrl + 'rs1.png');
        cards[optionTwoId].setAttribute('src', baseUrl + 'rs1.png');

        // remove event
        cards[optionOneId].removeEventListener('click',flipcard);
        cards[optionTwoId].removeEventListener('click',flipcard);

        // cardsWon array and push the cardsChosen to be stored in the array.
        cardsWon.push(cardsChosen);
    }
    else {
        // False - no match.
        cards[optionOneId].setAttribute('src',baseUrl + 'rse-1.png');
        cards[optionTwoId].setAttribute('src',baseUrl + 'rse-1.png');
        // alert("try again");
    }
    // clear arrays
    cardsChosen = [];
    cardsChosenId = [];

    // one point for every match
    resultDisplay.textContent = cardsWon.length;

    // check if game is over (cards Won === card Array / 2 = (6 wins) )
    if(cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'you Won';
    }
}

//
// call createBoard() funtion
createBoard();


// "TODO: rsb.png  "  - create square border (white+black+white stirpe)


document.getElementById("new").addEventListener("click", function(){
    // createBoard();
    // DOMContentLoaded();
    location.reload();
//    document.getElementById("output").innerHTML = "new games will be started";
console.log("test");
});


}); //end program
