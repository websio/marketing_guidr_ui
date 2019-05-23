class CarouselCard {
 constructor(element) {


  this.element = element;
  this.data = this.element.dataset.tab;

  this.testimonial = document.querySelector(`.testimonial[data-tab='${this.data}']`);
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
  //console.log(this.nextCard);
  console.log(nextCard);



  this.testimonials.forEach(element => {
   element.style.display = "none";
   element.classList.remove('hidden');
  });


  this.testimonials[nextCard].style.display = 'flex';
  
  if (nextCard == this.testimonials.length - 1) {
   nextCard = 0;
  }
  else {
   nextCard++;
  }

 }

 getPrev() {
  console.log(prevCard);
  if (prevCard == 0) {
   prevCard = this.testimonials.length - 1;
  }
  else {
   prevCard--;
  }
  this.testimonials.forEach(element => {
   element.style.display = "none";
   element.classList.remove('hidden');
  });
  this.testimonials[prevCard].style.display = 'flex';

 }
}



nextCard = 1;
prevCard = 0;
currentCard =0;

let cards = document.querySelectorAll('.testimonial');
cards.forEach(element => {

 return new CarouselCard(element);

});















/*old timer based card switching--

 //counter for choosing testimonials element
 let count = 0;
 let select = function () {
 //grabing all elements with testimonial class
 let testimonials = document.querySelectorAll('.testimonial');
 //looping through nodelist to set all elements to display none
 testimonials.forEach((element) => {
  element.style.display = "none";

 });
 //set current testimonial element to display block
 testimonials[count].style.display = "block";



 if (count < testimonials.length - 1) {
 count++
 }
 else {
  count = 0;
 }

 //call function select every six seconds
 setTimeout("select()", 6000);
}


//initial run of select function on window load
//window.onload = select;
*/

