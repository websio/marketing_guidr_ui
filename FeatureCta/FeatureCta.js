class FeatureCta {
    constructor(element) {
        this.element = element;
        
        this.element.addEventListener('click', () => this.callToAction());
    }

    callToAction() {
        alert('Thank you for clicking me! Further down the road, This will lead you to GlidR the APP!');
    }

}




const ctaBtn = document.querySelector('.cta-btn');

let ctaBtnInstance = new FeatureCta(ctaBtn);

