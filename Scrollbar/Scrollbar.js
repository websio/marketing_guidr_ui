class Scroller {
    constructor(element) {
        this.element = element;
       
        this.upButton = this.element.querySelector('#toTop');

        this.scroller = this.element.querySelector('.top--icon');
        this.scroller.classList.add('fas');
        this.scroller.classList.add('fa-caret-square-down');
        this.scroller.classList.add('fa-rotate-180');

        this.upButton.addEventListener('click', () => this.scrollUp());
    }

    scrollUp() {
        
        console.log('scroll');
    }
}




const scroller = document.querySelector('#Scrollbar');

let scrollerInstance = new Scroller(scroller);