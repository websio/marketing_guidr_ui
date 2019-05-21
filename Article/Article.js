class Article {
    constructor(element) {
        this.domElement = element;
        this.dropDown = this.domElement.querySelector('.btn--drop');
        this.dropDown.classList.add('fas');
        this.dropDown.classList.add('fa-caret-square-down');
        this.dropDown.classList.add('drop--right')
        this.headline = this.domElement.querySelector('.headline');

        this.closeButton = this.domElement.querySelector('.btn--grab');
        this.closeButton.classList.add('fas');
        this.closeButton.classList.add('fa-caret-square-down');
        this.closeButton.classList.add('fa-rotate-180');
        this.closeButton.classList.add('drop--right')

        this.dropDown.addEventListener('click', () => this.expandFeature());
        this.closeButton.addEventListener('click', () => this.closeFeature());
    }
    expandFeature() {
    this.domElement.classList.toggle('feature-open');
    if(this.domElement.classList.contains('feature-open')) {
      this.dropDown.classList.toggle('btn--open');
    }
  }
    closeFeature() {
      this.domElement.classList.toggle('feature-open');
      if(!this.domElement.classList.contains('feature-open')) {
        this.dropDown.classList.toggle('btn--open');
      }
    }
}

const features = document.querySelectorAll('.feature');
features.forEach(article => {
    return new Article(article);
});