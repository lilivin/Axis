class StickyHeader{
    constructor() {
        this.header = document.querySelector('#header');
        this.sticky = this.header.offsetTop;

        this._stickyStart = this._stickyStart.bind(this);

        window.onscroll = this._stickyStart;
    }

    _stickyStart() {
        if(window.pageYOffset > this.sticky){
            this.header.classList.add('header--scrolled');
        } else {
            this.header.classList.remove('header--scrolled');
        }
    }
}

export default StickyHeader;