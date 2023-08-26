import { ListTemplate } from './classes/ListTemplate.js';
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// ENUMS
var resourceType;
(function (resourceType) {
    resourceType[resourceType["BOOK"] = 0] = "BOOK";
    resourceType[resourceType["AUTHOR"] = 1] = "AUTHOR";
    resourceType[resourceType["FILM"] = 2] = "FILM";
    resourceType[resourceType["DIRECTOR"] = 3] = "DIRECTOR";
    resourceType[resourceType["PERSON"] = 4] = "PERSON";
})(resourceType || (resourceType = {}));
const docOne = {
    uid: 1,
    resourceType: resourceType.AUTHOR,
    data: { title: 'name of the wind' },
};
const docTwo = {
    uid: 10,
    resourceType: resourceType.BOOK,
    data: { name: 'yoshi' },
};
console.log(docOne, docTwo);
