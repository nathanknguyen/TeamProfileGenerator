const Manager = require('../lib/Manager');

describe("Manager class", () => {
    it("has manager name, id, and email", () => {
        const managerTest = new Manager('Nathan', 52, 'nathan@nathan.com', 53);
        expect('name' in managerTest).toEqual(true);
        expect('id' in managerTest).toEqual(true);
        expect('email' in managerTest).toEqual(true);
        expect('officeNumber' in managerTest).toEqual(true);
      });

      it("has manager name", () => {
        const temp = 'Nathan';
        const expectedName = new Manager('Nathan', 52, 'nathan@nathan.com', 53).getName();
        expect(expectedName).toEqual(temp);
      });

      it("has manager id", () => {
        const temp = 52;
        const expectedId = new Manager('Nathan', 52, 'nathan@nathan.com', 53).getId();
        expect(expectedId).toEqual(temp);
      });

      it("has manager email", () => {
        const temp = 'nathan@nathan.com';
        const expectedEmail = new Manager('Nathan', 52, 'nathan@nathan.com', 53).getEmail();
        expect(expectedEmail).toEqual(temp);
      });

      it("has manager officeNumber", () => {
        const temp = 53;
        const expectedOfficeNumber = new Manager('Nathan', 52, 'nathan@nathan.com', 53).getOfficeNumber();
        expect(expectedOfficeNumber).toEqual(temp);
      });


      it("has manager role", () => {
        const temp = 'Manager';
        const expectedRole = new Manager().getRole();
        expect(expectedRole).toEqual(temp);
      });
});
