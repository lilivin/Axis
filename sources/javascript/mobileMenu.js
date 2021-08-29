class MobileMenu {
    constructor(element) {
        this.element = element;
        this.hamburger = document.getElementById('hamburger');
        this.mobile_menu = this.element.querySelector('#mobile-menu');
        this.mobile_menu_items = this.element.querySelectorAll("[data-element='mobile-navigation']");

        this._closeMobileMenu = this._closeMobileMenu.bind(this);
        this._toggleMenu = this._toggleMenu.bind(this);

        if (this.mobile_menu_items !== null){
            this.mobile_menu_items.forEach(mobile_menu_item => {
                mobile_menu_item.addEventListener('click', this._toggleMenu);
                mobile_menu_item.addEventListener('click', this._closeMobileMenu);
            });
        }

        if (this.hamburger !== null){
            this.hamburger.addEventListener('click', event => {
                event.preventDefault();
                this._toggleMenu();
            });
        }

    }

    _closeMobileMenu(){
        if (this.mobile_menu != null && this.mobile_menu.classList.contains('toggled')) {
            document.body.style.overflow = 'initial';
            document.querySelector('html').style.overflow = 'initial';
            this.hamburger.classList.toggle("active");
        }
    }

    _toggleMenu(){
        let menu = document.querySelector('#mobile-menu');
        this.hamburger.classList.toggle("active");
        this.mobile_menu.classList.toggle("toggled");
        if(menu.classList.contains("toggled")) {
            document.body.style.overflow = 'hidden';
            document.querySelector('html').style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.querySelector('html').style.overflow = 'auto';
        }
    }
}

export default MobileMenu;