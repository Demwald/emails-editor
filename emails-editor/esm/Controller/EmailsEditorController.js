var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Email from '../Email/Email';
var EmailsEditorController = /** @class */ (function () {
    function EmailsEditorController(_a) {
        var _this = this;
        var wrapper = _a.wrapper, emailsInput = _a.emailsInput;
        this.emails = [];
        this.observers = {};
        this.emailsInput = emailsInput;
        this.wrapper = wrapper;
        this.emailsInput.addEventListener('keyup', function (e) {
            if (e.keyCode === 13 || e.keyCode === 188) {
                _this.addEmails(_this.emailsInput.value);
            }
        });
        this.emailsInput.addEventListener('paste', function (e) {
            var pasted = e.clipboardData.getData('text');
            _this.addEmails(pasted);
            e.preventDefault();
        });
        this.emailsInput.addEventListener('blur', function (e) {
            _this.addEmails(_this.emailsInput.value);
        });
    }
    EmailsEditorController.prototype.listEmails = function () {
        return this.emails;
    };
    /**
     * Adds email(s) to class list of emails and to component input.
     * @param emails If the string is passed, method splits it using comma as delimeter.
     */
    EmailsEditorController.prototype.addEmails = function (emails) {
        var _this = this;
        if (typeof emails === 'string') {
            emails = emails.replace(/,$/, '').split(',');
        }
        emails = emails.map(function (email) { return email.trim(); }).filter(function (email) { return email !== '' && _this.emails.findIndex(function (em) { return em.value === email; }) === -1; });
        emails.forEach(function (text) {
            var removeCallback = function (email) {
                _this.removeEmail(email);
            };
            var changeCallback = function (email) {
                _this.emit('change', { emails: [email] });
            };
            var email = new Email({ text: text, removeCallback: removeCallback, changeCallback: changeCallback });
            _this.emails.push(email);
            _this.wrapper.insertBefore(email.element, _this.emailsInput);
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
    };
    EmailsEditorController.prototype.removeEmail = function (email) {
        this.wrapper.removeChild(email.element);
        this.emails = this.emails.filter(function (em) { return em.value !== email.value; });
        this.emit('remove', {
            emails: [email]
        });
        if (this.emails.length === 0) {
            this.emailsInput.placeholder = 'Enter email addresses...';
        }
    };
    /**
     * Method to subscribe to different types of events.
     * @param event Event name. Currently 3 events are available: add, change and remove.
     * @param callback Function to invoke when event has happen.
     */
    EmailsEditorController.prototype.on = function (event, callback) {
        if (this.observers[event] == undefined) {
            this.observers[event] = [];
        }
        this.observers[event].push(callback);
    };
    /**
     * Method to unsubscribe from event notifications.
     * @param event Event name.
     * @param callback Function to remove from observers list of the event specified.
     */
    EmailsEditorController.prototype.off = function (event, callback) {
        if (this.observers[event] != undefined) {
            this.observers[event] = this.observers[event].filter(function (fn) { return fn !== callback; });
        }
    };
    /**
     * Method to send notification to observers.
     * @param event Event name.
     * @param data Any data related to event. Currently it includes event name and emails triggered the event.
     */
    EmailsEditorController.prototype.emit = function (event, data) {
        if (this.observers[event] == undefined) {
            return;
        }
        this.observers[event].forEach(function (fn) { return fn(__assign({ event: event }, data)); });
    };
    return EmailsEditorController;
}());
export default EmailsEditorController;
//# sourceMappingURL=EmailsEditorController.js.map