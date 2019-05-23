class CarouselCard {
 constructor(element) {
  this.element = element;
  this.data = this.element.dataset.tab;
  this.testimonials = document.querySelectorAll('.testimonial');
  this.next = this.element.querySelector('.next');
  this.prev = this.element.querySelector('.prev');
  this.next.addEventListener('click', event => {
    this.getNext();
  });
  this.prev.addEventListener('click', event => {
    this.getPrev();
  });
}

 getNext() {
 
  this.testimonials.forEach(element => {
   element.style.display = "none";
   element.classList.remove('hidden');
  });

  if (nextCard == this.testimonials.length - 1) {
    nextCard = 0;
   }
   else {
    nextCard++;
   }
  this.testimonials[nextCard].style.display = 'flex';
  
 }

 getPrev() {

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

let nextCard = 0;

let cards = document.querySelectorAll('.testimonial');
cards.forEach(element => {

 return new CarouselCard(element);

});
