// counter for choosing testimonials element
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

 //call function select every three seconds
 setTimeout("select()", 3000);
}


//initial run of select function on window load
window.onload = select;

