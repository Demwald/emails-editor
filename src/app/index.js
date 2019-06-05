import Randomizer from './randomizer';

const container = document.getElementById('container');
let editor = EmailsEditor({container});

//Example of using event subscription
editor.on('change', (data) => {
    console.log(data);
});

let randomizer = new Randomizer();
const btnRandomEmail = document.getElementById('btn-random-email');
btnRandomEmail.addEventListener('click', (e) => {   
    let randomEmail = randomizer.getRandomEmail();
    editor.addEmails([randomEmail]);
});

const btnAlertEmailsCount = document.getElementById('btn-emails-cnt-alert');
btnAlertEmailsCount.addEventListener('click', (e) => {
    let emailsValidTotal = editor.listEmails().filter((email) => email.valid).length;
    alert('Total vaild emails: ' + emailsValidTotal);
});