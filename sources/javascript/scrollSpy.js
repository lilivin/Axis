class ScrollSpy{
    constructor(element) {
        this.element = element;
        this.sections = document.querySelectorAll('[data-navigation]');
        this.nav_links = this.element.querySelectorAll('.header__navigation-link');

        this._isScrolledIntoView = this._isScrolledIntoView.bind(this);

        window.addEventListener('scroll', () => {
            this.sections.forEach(section => {
                this._isScrolledIntoView(section);
            });
        });
    }

    _isScrolledIntoView(el){
        let rect = el.getBoundingClientRect();
        let elemTop = rect.top;
        let elemBottom = rect.bottom;
        let isVisible = (elemTop <= 400) && (elemBottom >= 400);
        if(isVisible){
            this.nav_links.forEach(link => {
                let href = link.getAttribute('href').substr(1);
                let id = el.getAttribute('data-navigation');
                link.classList.remove('header__navigation-link--active');
                if(href == id){
                    link.classList.add('header__navigation-link--active');
                } else if(id == 'main-section'){
                    link.classList.remove('header__navigation-link--active');
                }
            })
        }
    };
}

export default ScrollSpy;