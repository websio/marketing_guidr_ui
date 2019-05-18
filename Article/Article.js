class Article {
    constructor(element) {
        this.domElement = element;
        this.expandButton = this.domElement.querySelector('.expandButton');
        this.expandButton.innerText = 'Expand';

    }
}


const features = document.querySelectorAll('.feature');
features.forEach(article => {
    return new Article(article);
});
//console.log(features);