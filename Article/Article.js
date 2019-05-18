class Article {
    constructor(element) {
        this.domElement = element;
        this.expandButton = this.domElement.querySelector('.expandButton');
        this.expandButton.innerText = 'Expand';

        this.expandButton.eventListener('click', () => expandArticle());
    }
    expandArticle() {
        this.domElement.toggle('feature-open');
        if (this.domElement.classList.contains('feature-open')) {
            this.expandButton.textContent = 'Close';
          } else {
            this.expandButton.textContent = 'Expand';
          }
        }  
}


const features = document.querySelectorAll('.feature');
features.forEach(article => {
    return new Article(article);
});
//console.log(features);