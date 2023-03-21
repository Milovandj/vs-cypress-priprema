import { addOrganization } from "../page_objects/addOrganization";
import { loginPage } from "../page_objects/loginPage"
let loginData = {
    email: "milovandjuric996@gmail.com",
    password: "junior96"
};
describe("Add Organizations tests", () => {
    before("Log into the App", () => {
    cy.visit("/login")
    loginPage.login(loginData.email, loginData.password)
    cy.url().should("not.include", "/login")
    });
    it("Add new Organization", () => {
        cy.intercept({
            method: "POST",
            url: `${Cypress.env("apiUrl")}/v2/organizations`,
        }).as("successfullAddNewOrg");
        cy.visit("/my-organizations")

    });
});