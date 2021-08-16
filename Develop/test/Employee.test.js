const Employee = require('../lib/Employee');

describe("Employee class", () => {
    it("has employee name, id, and email", () => {
        const employeeTest = new Employee('Nathan', 52, 'nathan@nathan.com');
        expect('name' in employeeTest).toEqual(true);
        expect('id' in employeeTest).toEqual(true);
        expect('email' in employeeTest).toEqual(true);
      });

      it("has employee name", () => {
        const temp = 'Nathan';
        const expectedName = new Employee('Nathan', 52, 'nathan@nathan.com').getName();
        expect(expectedName).toEqual(temp);
      });

      it("has employee id", () => {
        const temp = 52;
        const expectedId = new Employee('Nathan', 52, 'nathan@nathan.com').getId();
        expect(expectedId).toEqual(temp);
      });

      it("has employee email", () => {
        const temp = 'nathan@nathan.com';
        const expectedEmail = new Employee('Nathan', 52, 'nathan@nathan.com').getEmail();
        expect(expectedEmail).toEqual(temp);
      });

      it("has employee role", () => {
        const temp = 'Employee';
        const expectedRole = new Employee().getRole();
        expect(expectedRole).toEqual(temp);
      });
});