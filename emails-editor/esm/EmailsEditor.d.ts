import EmailsEditorController from './Controller/EmailsEditorController';
import './emails-editor.css';
export default function EmailsEditor({ container, ...options }: {
    container: HTMLDivElement;
    options: any[];
}): EmailsEditorController;
