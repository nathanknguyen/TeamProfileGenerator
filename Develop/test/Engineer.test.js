const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    it("has engineer name, id, and email", () => {
        const engineerTest = new Engineer('Nathan', 52, 'nathan@nathan.com', 'githubHandle');
        expect('name' in engineerTest).toEqual(true);
        expect('id' in engineerTest).toEqual(true);
        expect('email' in engineerTest).toEqual(true);
        expect('github' in engineerTest).toEqual(true);
      });

      it("has engineer name", () => {
        const temp = 'Nathan';
        const expectedName = new Engineer('Nathan', 52, 'nathan@nathan.com', 'githubHandle').getName();
        expect(expectedName).toEqual(temp);
      });

      it("has engineer id", () => {
        const temp = 52;
        const expectedId = new Engineer('Nathan', 52, 'nathan@nathan.com', 'githubHandle').getId();
        expect(expectedId).toEqual(temp);
      });

      it("has engineer email", () => {
        const temp = 'nathan@nathan.com';
        const expectedEmail = new Engineer('Nathan', 52, 'nathan@nathan.com', 'githubHandle').getEmail();
        expect(expectedEmail).toEqual(temp);
      });

      it("has engineer github", () => {
        const temp = 'githubHandle';
        const expectedHandle = new Engineer('Nathan', 52, 'nathan@nathan.com', 'githubHandle').getGithub();
        expect(expectedHandle).toEqual(temp);
      });


      it("has engineer role", () => {
        const temp = 'Engineer';
        const expectedRole = new Engineer().getRole();
        expect(expectedRole).toEqual(temp);
      });


});