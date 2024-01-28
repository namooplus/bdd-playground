describe("Main", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500");
  });

  it("should show a welcome form", () => {
    cy.findByText("Welcome to namoo space!").should("exist");
    cy.findByTestId("anchor-signup").should("exist");
  });

  it("can navigate to the signup page", () => {
    cy.findByTestId("anchor-signup").click();
    cy.url().should("include", "/signup/identification");
  });
});
