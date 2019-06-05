var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import EmailsEditorController from './Controller/EmailsEditorController';
import './emails-editor.css';
export default function EmailsEditor(_a) {
    var container = _a.container, options = __rest(_a, ["container"]);
    var wrapper = document.createElement('div');
    wrapper.classList.add('emails-editor__wrapper');
    container.appendChild(wrapper);
    var emailsInput = document.createElement('input');
    emailsInput.classList.add('emails-editor__input');
    emailsInput.setAttribute('type', 'text');
    emailsInput.placeholder = 'Enter email addresses...';
    wrapper.appendChild(emailsInput);
    wrapper.addEventListener('click', function (e) {
        if (e.target.tagName !== 'INPUT') {
            emailsInput.focus();
        }
    });
    return new EmailsEditorController({ wrapper: wrapper, emailsInput: emailsInput });
}
//# sourceMappingURL=EmailsEditor.js.map