const findTheOldest = function(people) {
    let oldestPerson = people[0];
    const currentYear = new Date().getFullYear();

    for (const person of people) {
    const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    const oldestAge = (oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth;

    if (age > oldestAge) {
        oldestPerson = person;
    }
    }

    return oldestPerson;
}

// Do not edit below this line
module.exports = findTheOldest;
