class ChangeTabsContent {
    constructor(selector) {
        this.selector = selector;
        this.buttons = this.selector.querySelectorAll("[data-tab]");
        this.containers = this.selector.querySelectorAll("[data-tab-container]");

        this._buttonClick = this._buttonClick.bind(this);

        this.buttons.forEach(button => {
            button.addEventListener('click', this._buttonClick);
        })
    }

    _buttonClick(event) {
        let currentBtn = event.target;
        let currentBtnNumber = event.target.getAttribute('data-tab');

        this.buttons.forEach(button => {
           button.classList.remove('active');
        });

        if (!currentBtn.classList.contains('active')){
            currentBtn.classList.add('active');
        }

        this.containers.forEach(container => {
            let containerNumber = container.getAttribute('data-tab-container');
            container.classList.remove('active');
            if(containerNumber == currentBtnNumber){
                container.classList.add('active');
            }
        });
    }
}

export default ChangeTabsContent;