class StartInteractiveElements{
    constructor(element) {
        this.element = element;
        let window_height = window.innerHeight;
        let window_top = document.body.scrollTop - 100;
        if (document.body.clientWidth <= 600) {
            window_top = document.body.scrollTop - 50;
        }
        let window_bottom = (window_top + window_height);

        let element_height = this.element.clientHeight;
        let element_top = document.body.scrollTop + this.element.getBoundingClientRect().top;
        let element_bottom = (element_top + element_height) - 20;

        if ((element_bottom >= window_top) && element_top <= window_bottom) {
            this.element.classList.add('visible');
        }
    }
}

export default StartInteractiveElements;