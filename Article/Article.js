class Article {
    constructor(element) {
        this.domElement = element;
        this.dropDown = this.domElement.querySelector('.btn--close');
        this.dropDown.classList.add('fas');
        this.dropDown.classList.add('fa-caret-square-down');
        this.dropDown.classList.add('drop--right')
        this.headline = this.domElement.querySelector('.headline');

        this.dropDown.addEventListener('click', () => this.expandFeature());
    }
    expandFeature() {
    this.domElement.classList.toggle('feature-open');
  }
}

const features = document.querySelectorAll('.feature');
features.forEach(article => {
    return new Article(article);
});