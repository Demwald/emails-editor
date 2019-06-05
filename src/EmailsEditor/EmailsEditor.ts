import EmailsEditorController from './Controller/EmailsEditorController';
import './emails-editor.css';

export default function EmailsEditor({ container, ...options } : { container : HTMLDivElement, options: any[] }) : EmailsEditorController {
    let wrapper = document.createElement('div');
    wrapper.classList.add('emails-editor__wrapper');
    container.appendChild(wrapper);

    let emailsInput = document.createElement('input');
    emailsInput.classList.add('emails-editor__input');
    emailsInput.setAttribute('type', 'text');
    emailsInput.placeholder = 'Enter email addresses...';
    wrapper.appendChild(emailsInput);
    wrapper.addEventListener('click', (e) => {
        if ((<HTMLInputElement>e.target).tagName !== 'INPUT') {
            emailsInput.focus();
        }
    });

    return new EmailsEditorController({ wrapper, emailsInput });
}