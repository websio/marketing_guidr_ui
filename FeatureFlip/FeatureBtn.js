class Card {
    constructor(element) {
        this.element = element;
        this.background = this.element.querySelector('.card');
        this.header = this.element.querySelector('.card-header');
        this.cardPars = this.element.querySelectorAll('.card-p'); // node list
        this.button = this.element.querySelector('.card-btn');


    }
    changeColors() {
        
    }
}


const featureCard = document.querySelector('.feature-list');

let featureCardInstance = new Card(featureCard);