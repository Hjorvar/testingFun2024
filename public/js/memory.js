let selectedCards = [];
const matchedCards = [];

document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        const cardName = card.getAttribute('data-card-name');
        card.style.background = "url('images/cards/" + cardName + ".png') no-repeat center center";
        card.style.backgroundSize = "cover";

        selectedCards.push(card);

        if (selectedCards.length === 2) {
            if (selectedCards[0].getAttribute('data-card-name') === selectedCards[1].getAttribute('data-card-name')) {
                matchedCards.push(selectedCards[0]);
                matchedCards.push(selectedCards[1]);
                selectedCards = [];
                if (matchedCards.length === cardsArray.length) {
                    alert('You found all pairs!');
                }
            } else {
                setTimeout(function() {
                    selectedCards.forEach(function(card) {
                        card.style.background = "url('images/cards/red_joker.png') no-repeat center center";
                        card.style.backgroundSize = "cover";
                    });
                    selectedCards = [];
                }, 1000);
            }
        }
    });
});
