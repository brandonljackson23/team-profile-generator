const Engineer = require('../lib/Engineer.js');

test("Creates an engineer object", () => {
    const engineer = new Engineer('Peter Parker', '3', 'webslinger@gmail.com', 'webslinger213');

    expect(engineer.name).toBe('Peter Parker');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('webslinger@gmail.com');
    expect(engineer.github).toBe('webslinger213');
});

test("Gets the engineer's name", () => {
    const engineer = new Engineer('Peter Parker', '3', 'webslinger@gmail.com', 'webslinger213');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
});

test("Gets the engineer's id", () => {
    const engineer = new Engineer('Peter Parker', '3', 'webslinger@gmail.com', 'webslinger213');

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});

test("Gets the engineer's email", () => {
    const engineer = new Engineer('Peter Parker', '3', 'webslinger@gmail.com', 'webslinger213');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test("Gets the engineer's GitHub username", () => {
    const engineer = new Engineer('Peter Parker', '3', 'webslinger@gmail.com', 'webslinger213');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});