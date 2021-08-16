const Intern = require('../lib/Intern');

describe("Intern class", () => {
    it("has intern name, id, and email", () => {
        const internTest = new Intern('Nathan', 52, 'nathan@nathan.com', 'harvard');
        expect('name' in internTest).toEqual(true);
        expect('id' in internTest).toEqual(true);
        expect('email' in internTest).toEqual(true);
        expect('school' in internTest).toEqual(true);
      });

      it("has intern name", () => {
        const temp = 'Nathan';
        const expectedName = new Intern('Nathan', 52, 'nathan@nathan.com', 'harvard').getName();
        expect(expectedName).toEqual(temp);
      });

      it("has intern id", () => {
        const temp = 52;
        const expectedId = new Intern('Nathan', 52, 'nathan@nathan.com', 'harvard').getId();
        expect(expectedId).toEqual(temp);
      });

      it("has intern email", () => {
        const temp = 'nathan@nathan.com';
        const expectedEmail = new Intern('Nathan', 52, 'nathan@nathan.com', 'harvard').getEmail();
        expect(expectedEmail).toEqual(temp);
      });

      it("has intern school", () => {
        const temp = 'harvard';
        const expectedSchool = new Intern('Nathan', 52, 'nathan@nathan.com', 'harvard').getSchool();
        expect(expectedSchool).toEqual(temp);
      });


      it("has intern role", () => {
        const temp = 'Intern';
        const expectedRole = new Intern().getRole();
        expect(expectedRole).toEqual(temp);
      });


});