class Card {
    constructor(element) {
        this.element = element;
        this.background = this.element.querySelector('.card');
        this.header = this.element.querySelector('.card-header');
        this.cardPars = this.element.querySelectorAll('.card-p'); // node list
        this.button = this.element.querySelector('.card-btn');

        
        this.button.addEventListener('click', () => this.changeColors());

    }
    changeColors() {
        if(!this.background.classList.contains('card-bg-alt')) {

            this.background.classList.add('card-bg-alt');
            this.header.classList.add('card-header-alt');
            this.cardPars.forEach(par => {
                par.classList.add('card-pars-alt');               
            });
            this.button.classList.add('card-btn-alt');
        } else {
            this.background.classList.remove('card-bg-alt');
            this.header.classList.remove('card-header-alt');
            this.cardPars.forEach(par => {
                par.classList.remove('card-pars-alt');               
            });
            this.button.classList.remove('card-btn-alt');
            
        }
    }
}


const featureCard = document.querySelector('.feature-list');

let featureCardInstance = new Card(featureCard);