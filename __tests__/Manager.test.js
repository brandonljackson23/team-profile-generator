const Manager = require('../lib/Manager.js');

test("Creates a manager object", () => {
    const manager = new Manager('Bruce Wayne', '2', 'darkknight@gmail.com', '101');

    expect(manager.name).toBe('Bruce Wayne');
    expect(manager.id).toBe('2');
    expect(manager.email).toBe('darkknight@gmail.com');
    expect(manager.officeNumber).toBe('101');
});

test("Gets the manager's name", () => {
    const manager = new Manager('Bruce Wayne', '2', 'darkknight@gmail.com', '101');

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
});

test("Gets the manager's id", () => {
    const manager = new Manager('Bruce Wayne', '2', 'darkknight@gmail.com', '101');

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});

test("Gets the managers's email", () => {
    const manager = new Manager('Bruce Wayne', '2', 'darkknight@gmail.com', '101');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

test("Gets the managers's office number", () => {
    const manager = new Manager('Bruce Wayne', '2', 'darkknight@gmail.com', '101');

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));
});