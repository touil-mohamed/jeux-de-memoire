const cards = document.querySelectorAll('.memory-card');
let hasFlippeCard =false;
let firstCard, secondCard;
let lockBoard = false;
function flipCard(){
    //this.classList.toggle('flip');
    if (lockBoard) return;
    if (this == firstCard) return;        
    this.classList.add('flip');
    if (!hasFlippeCard) {
        hasFlippeCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    //lockBoard=true;
    //hasFlippeCard = false;
    checkForMatch();
}
function checkForMatch(){
    /**if (firstCard.dataset.framework == secondCard.dataset.framework) {
       disableCards();
       return; 
    }
    if (firstCard.dataset.name == secondCard.dataset.name) {
        disableCards();
        return;
    }*/
    //unflipCards();
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards () : unflipCards ();
}
function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}
function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        //lockBoard =false;
        resetBoard();
    },1500 );
}
function resetBoard(){
    [hasFlippeCard, lockBoard]=[false, false];
    [firstCard, secondCard]=[null,null];
}
(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();
cards.forEach(card=>card.addEventListener('click', flipCard));