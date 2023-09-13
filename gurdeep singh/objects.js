let person = {
    name : 'Gurdeep Singh',
    person_age : 19,
    contact: 8929223020,
    address: 'Delhi,New Delhi'
}
console.log(person);
// console.log(person.age);
// console.log(person['person_age']);

for (let key in person){
    console.log(person[key]);
}