import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
let docOne;
let docTwo;
const me = {
    name: 'aref',
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
/*const invOne = new Invoice('Aref', 'Freelance', 200);
const invTwo = new Invoice('Mario', 'Work', 100);
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});*/
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
