const Intern = require('../lib/Intern.js');

test("Creates an intern object", () => {
    const intern = new Intern('Diana Prince', '4', 'amazonprincess@gmail.com', 'Warrior Academy');

    expect(intern.name).toBe('Diana Prince');
    expect(intern.id).toBe('4');
    expect(intern.email).toBe('amazonprincess@gmail.com');
    expect(intern.school).toBe('Warrior Academy');
});

test("Gets the intern's name", () => {
    const intern = new Intern('Diana Prince', '4', 'amazonprincess@gmail.com', 'Warrior Academy');

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
});

test("Gets the intern's id", () => {
    const intern = new Intern('Diana Prince', '4', 'amazonprincess@gmail.com', 'Warrior Academy');

    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});

test("Gets the intern's email", () => {
    const intern = new Intern('Diana Prince', '4', 'amazonprincess@gmail.com', 'Warrior Academy');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

test("Gets the intern's school", () => {
    const intern = new Intern('Diana Prince', '4', 'amazonprincess@gmail.com', 'Warrior Academy');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});