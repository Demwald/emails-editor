import '../emails-editor.css';

export default class Email {
    public value : string;
    public valid: boolean;
    public element : HTMLSpanElement;
    constructor({ text, removeCallback, changeCallback } : { text : string, removeCallback : Function, changeCallback : Function }) {
        this.value = text;
        this.getHtmlBlock({ removeCallback, changeCallback });
        this.validateEmail();
    }

    private validateEmail() : void {
        this.valid = this.value.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== -1;
        if (this.valid) {
            this.element.classList.remove('emails-editor__block--invalid');
        } else {
            this.element.classList.add('emails-editor__block--invalid');
        }
    }

    /**
     * Constructs email block ready to append to input.
     */
    private getHtmlBlock({ removeCallback, changeCallback } : { removeCallback : Function, changeCallback : Function }) : void {
        this.element = document.createElement('span');
        this.element.classList.add('emails-editor__block');
        let textContent = document.createElement('div'),
            inputContent = document.createElement('input'),
            closeContainer = document.createElement('div'),
            previousValue = this.value;

        textContent.classList.add('emails-editor__text-content');
        textContent.innerText = this.value;
        this.element.appendChild(textContent);

        inputContent.classList.add('emails-editor__input', 'emails-editor__input-content');
        inputContent.value = this.value;
        inputContent.addEventListener('focus', () => {
            previousValue = this.value;
            this.element.classList.remove('emails-editor__block--invalid');
            this.element.classList.add('emails-editor__block--edit');
        });
        inputContent.addEventListener('blur', () => {
            this.element.classList.remove('emails-editor__block--edit');
            this.validateEmail();
            if (this.value !== previousValue) {
                changeCallback(this);
            }
        });
        inputContent.addEventListener('keyup', (e : KeyboardEvent) => {
            if (e.keyCode === 13) {
                inputContent.blur();
                return this;
            }
            this.value = (<HTMLInputElement>e.target).value;
            textContent.innerText = this.value;
        });
        this.element.appendChild(inputContent);

        closeContainer.classList.add('emails-editor__close-btn');
        closeContainer.addEventListener('click', (e : MouseEvent) => {
            e.preventDefault();
            removeCallback(this);
        });
        this.element.appendChild(closeContainer);
    }
}