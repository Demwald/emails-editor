import Email from '../Email/Email';
export default class EmailsEditorController {
    private emails;
    private observers;
    private wrapper;
    private emailsInput;
    constructor({ wrapper, emailsInput }: {
        wrapper: HTMLDivElement;
        emailsInput: HTMLInputElement;
    });
    listEmails(): Email[];
    /**
     * Adds email(s) to class list of emails and to component input.
     * @param emails If the string is passed, method splits it using comma as delimeter.
     */
    addEmails(emails: string | string[]): void;
    removeEmail(email: Email): void;
    /**
     * Method to subscribe to different types of events.
     * @param event Event name. Currently 3 events are available: add, change and remove.
     * @param callback Function to invoke when event has happen.
     */
    on(event: string, callback: Function): void;
    /**
     * Method to unsubscribe from event notifications.
     * @param event Event name.
     * @param callback Function to remove from observers list of the event specified.
     */
    off(event: string, callback: Function): void;
    /**
     * Method to send notification to observers.
     * @param event Event name.
     * @param data Any data related to event. Currently it includes event name and emails triggered the event.
     */
    private emit;
}
