import '../emails-editor.css';
export default class Email {
    value: string;
    valid: boolean;
    element: HTMLSpanElement;
    constructor({ text, removeCallback, changeCallback }: {
        text: string;
        removeCallback: Function;
        changeCallback: Function;
    });
    private validateEmail;
    /**
     * Constructs email block ready to append to input.
     */
    private getHtmlBlock;
}
