class Scroller {
    constructor(element) {
        this.element = element;
       
        this.scroller = this.element.querySelector('.top--icon');
        this.scroller.classList.add('fas');
        this.scroller.classList.add('fa-caret-square-down');
        this.scroller.classList.add('fa-rotate-180');
    }
}




const scroller = document.querySelector('#toTop');

let scrollerInstance = new Scroller(scroller);