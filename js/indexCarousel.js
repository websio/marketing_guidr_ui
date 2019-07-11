class CarouselCard {
 constructor(element) {
  this.element = element;
  // set this.data to the value of the data tab of this.element
  this.data = this.element.dataset.tab;
  //get all elements with the class testimonial and set this.testimonials to that nodelist
  this.testimonials = document.querySelectorAll('.testimonial');
  //set this.next and this.prev to the carousel next and previous buttons 
  this.next = this.element.querySelector('.next');
  this.prev = this.element.querySelector('.prev');
  //add eventlisteners to next and previous buttons and their respective functions
  this.next.addEventListener('click', event => {
    this.getNext();
  });
  this.prev.addEventListener('click', event => {
    this.getPrev();
  });
}

 getNext() {
 //loop through testimonials node list setting all testimonials display to none and remove initial hidden class
  this.testimonials.forEach(element => {
   element.style.display = "none";
   element.classList.remove('hidden');
  });
 // if nextcard is at the end of testimonials node list loop backaround to the beginning else add 1 to nextcard
  if (nextCard == this.testimonials.length - 1) {
    nextCard = 0;
   }
   else {
    nextCard++;
   }
  this.testimonials[nextCard].style.display = 'flex';
  
 }

 getPrev() {
  // if nextcard is at the beginning of the nodelist loop around to the end  else subtract 1 from nextcard
  if (nextCard == 0) {
   nextCard = this.testimonials.length - 1;
  }
  else {
   nextCard--;
  }
  this.testimonials.forEach(element => {
   element.style.display = "none";
   element.classList.remove('hidden');
  });
  this.testimonials[nextCard].style.display = 'flex';

 }
}
// card position variable
let nextCard = 0;
//get all elements with class testimonial and create new CarouselCard object from them.
let cards = document.querySelectorAll('.testimonial');
cards.forEach(element => {

 return new CarouselCard(element);

});
