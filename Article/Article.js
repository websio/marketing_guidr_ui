class Article {
    constructor(element) {
        this.domElement = element;
        this.dropDown = this.domElement.querySelector('.expand');
        console.log(this.dropDown);
        //this.expandButton.innerText = 'Expand';
        this.dropDown.classList.add('fas');
        this.dropDown.classList.add('fa-caret-square-down');
        this.dropDown.classList.add('fa-x3');
        this.dropDown.classList.add('drop--right')
        console.log(this.dropDown);
        this.headline = this.domElement.querySelector('.headline');

        // this.expandButton.addEventListener('click', () => this.expandFeature());
    }
    // expandFeature() {
    //     this.domElement.classList.toggle('feature-open');
    //     if (this.domElement.classList.contains('feature-open')) {
    //         this.expandButton.textContent = 'Close';
    //       } else {
    //         this.expandButton.textContent = 'Expand';
    //       }
    //     }  
}


const features = document.querySelectorAll('.feature');
features.forEach(article => {
    return new Article(article);
});