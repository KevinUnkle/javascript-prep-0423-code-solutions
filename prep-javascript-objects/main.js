const person = {
  firstName: 'Kevin ',
  lastName: 'Unkle',
  hobby: 'coding',
};

console.log(person);

const fullName = (person.firstName += person.lastName);
console.log("The person's name is", fullName);

person.job = 'software developer.';
console.log("The person's current job is", person.job);

person['previousJob'] = 'Digital Marketing Manager';
console.log("The person's previous job is:", person['previousJob']);

console.log(person);
