function deckOfCards(input) {

    let cardsDeck = input.shift()
    .split(', ');

    let cardsDeckLength = cardsDeck.length;
    let numberOfComands = input.shift();


    for (let i = 0; i < numberOfComands; i++) {

        let elementLine = input.shift()
        .split(', ');

        let command = elementLine.shift();
        let cardName = '';
        let cardIndex = 0;
        
        switch (command) {
            case 'Add':

                cardName = elementLine.shift();
                cardIndex = cardsDeck.indexOf(cardName);

                if (cardIndex == -1) {
                    cardsDeck.push(cardName);
                    console.log(`Card successfully added`);
                } else {
                    console.log(`Card is already in the deck`);
                }
                break;
            case 'Remove':

                cardName = elementLine.shift();
                cardIndex = cardsDeck.indexOf(cardName);

                if (cardIndex != -1) {
                    cardsDeck.splice(cardIndex, 1);
                    console.log(`Card successfully removed`);
                } else {
                    console.log(`Card not found`);
                }
                break;
            case 'Remove At':

                cardIndex = elementLine.shift();

                if (cardIndex < 0 || cardIndex > cardsDeckLength ) {
                    console.log(`Index out of range`);
                } else {
                    cardsDeck.splice(cardIndex, 1);
                    console.log(`Card successfully removed`);
                }
                break;
            case 'Insert':
                
                cardIndex = Number(elementLine.shift());
                cardName = elementLine.shift();

                if (cardIndex < 0 || cardIndex > cardsDeckLength ) {
                    console.log(`Index out of range`);
                } else if (cardsDeck.includes(cardName)) {
                    console.log(`Card is already added`);
                } else {
                    cardsDeck.splice(cardIndex, 0, cardName);
                    console.log(`Card successfully added`);
                }
                break;
        
            
        }
        
    }

    console.log(cardsDeck.join(', '));

}
