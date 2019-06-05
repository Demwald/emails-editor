# emails-editor
Emails Editor component library and example of using it.

## Installation
Three versions of library are available: commonjs, esm and umd. Use **require**, **import** or **script tag** respectively.

## Usage
```javascript
const container = document.getElementById('container');
let editor = EmailsEditor({container});
editor.addEmails(['test@example.com']);
editor.on('change', (data) => {
    console.log(data);
});
````
## Methods

Name                | Info
------------------- | --------------------------------------------------------------------------
addEmails           | Adds new emails to editor component input. All duplicates will be ignored and filtered. <br>Pass string with comma separated values or array to add as many emails as you want.
removeEmail         | Removes email. Please note that as the argument it receives not index of the email but an instance of Email class.
listEmails          | Retrieves the array of **all** emails (both valid and invalid) from input. Filter necessary type of emails using property valid.
on                  | Subscribes to any of the events supported. Pass name of the event as the first argument and callback function as the second.
off                 | Unsubscribes from the event specified. Pass name of the event as the first argument and callback function to exclude from observers as the second.

## Events

Name            | Info
--------------- | --------------------------------------------------------------------------
add             | New emails (both valid and invalid) have been added.
remove          | Emails was removed.
change          | Email was changed by user.