class Article {
    constructor(element) {
        this.element = element;
        console.log(this.element);
    }
}


const features = document.querySelectorAll('.feature');
features.forEach(article => {
    return new Article(article);
});
//console.log(features);