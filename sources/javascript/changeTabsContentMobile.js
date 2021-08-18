class ChangeTabsContentMobile{
    constructor(selector) {
        this.selector = selector;
        this.tabsButtons = this.selector.querySelectorAll('[data-element]');
        this.tabsContents = this.selector.querySelectorAll('[data-tab]');

        this._buttonClick = this._buttonClick.bind(this);

        this.tabsContents.forEach(tab => {
            let tabHeight = tab.offsetHeight + 30;
            tab.setAttribute('data-height', tabHeight);
            tab.style.height = '0px';
        });

        this.tabsButtons.forEach(element => {
            element.addEventListener('click', this._buttonClick)
        });
    }

    _buttonClick(event){
        let currentTarget = event.currentTarget;
        let target = currentTarget.getAttribute('data-element');
        this.tabsContents.forEach(tab => {
            let tabAttribute = tab.getAttribute('data-tab');
            tab.style.height = '0';
            if (target == tabAttribute) {
                let tabHeight = tab.getAttribute('data-height');
                tab.style.height = tabHeight + 'px';
            }
        })
    }
}

export default ChangeTabsContentMobile;