class Article {
    constructor(element) {
        this.domElement = element;
        this.btnDrop = this.domElement.querySelector('.btn--drop');
        this.btnDrop.classList.add('fas');
        this.btnDrop.classList.add('fa-caret-square-down');
        this.btnDrop.classList.add('drop--right')
      
        this.dropDownSection = this.domElement.querySelector('.drop--down');
      

        this.closeButton = this.domElement.querySelector('.btn--grab');
        this.closeButton.classList.add('fas');
        this.closeButton.classList.add('fa-caret-square-down');
        this.closeButton.classList.add('fa-rotate-180');
        this.closeButton.classList.add('drop--right')

        this.btnDrop.addEventListener('click', () => this.expandFeature());
        this.closeButton.addEventListener('click', () => this.closeFeature());
    }
    expandFeature() {
      
    this.domElement.classList.toggle('feature-open');
    if(this.domElement.classList.contains('feature-open')) {
      this.btnDrop.classList.toggle('btn--open');
    } 
    
  }
    closeFeature() {
      this.domElement.classList.toggle('feature-open');
      if(!this.domElement.classList.contains('feature-open')) {
        this.btnDrop.classList.toggle('btn--open');
      }
    }
    
}

const features = document.querySelectorAll('.feature');
features.forEach(article => {
    return new Article(article);
});