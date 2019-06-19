import '../emails-editor.css';
var Email = /** @class */ (function () {
    function Email(_a) {
        var text = _a.text, removeCallback = _a.removeCallback, changeCallback = _a.changeCallback;
        this.value = text;
        this.getHtmlBlock({ removeCallback: removeCallback, changeCallback: changeCallback });
        this.validateEmail();
    }
    Email.prototype.validateEmail = function () {
        this.valid = this.value.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== -1;
        if (this.valid) {
            this.element.classList.remove('emails-editor__block--invalid');
        }
        else {
            this.element.classList.add('emails-editor__block--invalid');
        }
    };
    /**
     * Constructs email block ready to append to input.
     */
    Email.prototype.getHtmlBlock = function (_a) {
        var _this = this;
        var removeCallback = _a.removeCallback, changeCallback = _a.changeCallback;
        this.element = document.createElement('span');
        this.element.classList.add('emails-editor__block');
        var textContent = document.createElement('div'), inputContent = document.createElement('input'), closeContainer = document.createElement('div'), previousValue = this.value;
        textContent.classList.add('emails-editor__text-content');
        textContent.innerText = this.value;
        this.element.appendChild(textContent);
        inputContent.classList.add('emails-editor__input', 'emails-editor__input-content');
        inputContent.value = this.value;
        inputContent.addEventListener('focus', function () {
            previousValue = _this.value;
            _this.element.classList.remove('emails-editor__block--invalid');
            _this.element.classList.add('emails-editor__block--edit');
        });
        inputContent.addEventListener('blur', function () {
            _this.element.classList.remove('emails-editor__block--edit');
            _this.validateEmail();
            if (_this.value !== previousValue) {
                changeCallback(_this);
            }
        });
        inputContent.addEventListener('keyup', function (e) {
            if (e.keyCode === 13) {
                inputContent.blur();
                return _this;
            }
            _this.value = e.target.value;
            textContent.innerText = _this.value;
        });
        this.element.appendChild(inputContent);
        closeContainer.classList.add('emails-editor__close-btn');
        closeContainer.addEventListener('click', function (e) {
            e.preventDefault();
            removeCallback(_this);
        });
        this.element.appendChild(closeContainer);
    };
    return Email;
}());
export default Email;
//# sourceMappingURL=Email.js.map