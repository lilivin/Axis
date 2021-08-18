class StartInteractiveElements{
    constructor(selector) {
        this.selector = selector;
        let window_height = window.innerHeight;
        let window_top = document.body.scrollTop - 100;
        if (document.body.clientWidth <= 600) {
            window_top = document.body.scrollTop - 50;
        }
        let window_bottom = (window_top + window_height);

        let element_height = this.selector.clientHeight;
        let element_top = document.body.scrollTop + this.selector.getBoundingClientRect().top;
        let element_bottom = (element_top + element_height) - 20;

        if ((element_bottom >= window_top) && element_top <= window_bottom) {
            this.selector.classList.add('visible');
        }
    }
}

export default StartInteractiveElements;