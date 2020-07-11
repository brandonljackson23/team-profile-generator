const Employee = require('../lib/Employee.js');

test('Creates an employee object', () => {
    const employee = new Employee('Clark Kent', '1', 'manofsteel@gmail.com');

    expect(employee.name).toBe('Clark Kent');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('manofsteel@gmail.com');
});

test("Gets the employee's name", () => {
    const employee = new Employee('Clark Kent', '1', 'manofsteel@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("Gets the employee's id", () => {
    const employee = new Employee('Clark Kent', '1', 'manofsteel@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("Gets the employee's email", () => {
    const employee = new Employee('Clark Kent', '1', 'manofsteel@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("Gets the employee's role", () => {
    const employee = new Employee('Clark Kent', '1', 'manofsteel@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});