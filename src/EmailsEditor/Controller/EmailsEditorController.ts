import Email from '../Email/Email';

export default class EmailsEditorController {
    private emails: Email[];
    private observers: { [event: string]: Function[] };
    private wrapper: HTMLDivElement;
    private emailsInput: HTMLInputElement;
    constructor({ wrapper, emailsInput } : { wrapper : HTMLDivElement, emailsInput : HTMLInputElement }) {
        this.emails = [];
        this.observers = {};
        this.emailsInput = emailsInput;
        this.wrapper = wrapper;
        this.emailsInput.addEventListener('keyup', (e) => {
            if (e.keyCode === 13 || e.keyCode === 188) {
                this.addEmails(this.emailsInput.value);
            }
        });
        this.emailsInput.addEventListener('paste', (e) => {
            let pasted = e.clipboardData.getData('text');
            this.addEmails(pasted);
            e.preventDefault();
        });
        this.emailsInput.addEventListener('blur', (e) => {
            this.addEmails(this.emailsInput.value);
        });
    }

    public listEmails() {
        return this.emails;
    }

    /**
     * Adds email(s) to class list of emails and to component input.
     * @param emails If the string is passed, method splits it using comma as delimeter.
     */
    public addEmails(emails : string | string[]) {
        if (typeof emails === 'string') {
            emails = emails.replace(/,$/, '').split(',');
        }
        emails = emails.map((email : string) => email.trim()).filter((email : string) => email !== '' && this.emails.findIndex(em => em.value === email) === -1);

        emails.forEach((text : string) => {
            let removeCallback = (email : Email) => {
                this.removeEmail(email);
            };
            let changeCallback = (email : Email) => {
                this.emit('change', { emails: [email] });
            }
            let email = new Email({ text, removeCallback, changeCallback });
            this.emails.push(email);
            this.wrapper.insertBefore(email.element, this.emailsInput);
        });

        this.emailsInput.value = '';
        if (this.emails.length > 0) {
            this.emailsInput.placeholder = 'add more people...';
        }
        
        if (emails.length === 0) {
            return;
        }

        this.emit('add', {
            emails: this.emails.slice(this.emails.length - (emails.length))
        });
    }

    public removeEmail(email : Email) {
        this.wrapper.removeChild(email.element);
        this.emails = this.emails.filter((em) => em.value !== email.value);
        this.emit('remove', {
            emails: [email]
        });
        if (this.emails.length === 0) {
            this.emailsInput.placeholder = 'Enter email addresses...';
        }
    }

    /**
     * Method to subscribe to different types of events.
     * @param event Event name. Currently 3 events are available: add, change and remove.
     * @param callback Function to invoke when event has happen.
     */
    public on(event : string, callback : Function) {
        if (this.observers[event] == undefined) {
            this.observers[event] = [];
        }
        this.observers[event].push(callback);
    }

    /**
     * Method to unsubscribe from event notifications.
     * @param event Event name.
     * @param callback Function to remove from observers list of the event specified.
     */
    public off(event : string, callback : Function) {
        if (this.observers[event] != undefined) {
            this.observers[event] = this.observers[event].filter((fn) => fn !== callback);
        }
    }

    /**
     * Method to send notification to observers.
     * @param event Event name.
     * @param data Any data related to event. Currently it includes event name and emails triggered the event.
     */
    private emit(event : string, data : Object) {
        if (this.observers[event] == undefined) {
            return;
        }
        this.observers[event].forEach((fn) => fn({ event: event, ...data }));
    }
}