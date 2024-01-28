describe("Sign up : Identification", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/signup/identification");
  });

  it("should show an identification form", () => {
    cy.findByText("Generate your own id.").should("exist");
    cy.findByTestId("input-id").should("exist");
    cy.findByTestId("input-password").should("exist");
    cy.findByTestId("input-password-confirm").should("exist");
  });

  it("cannot be moved to the next step initially", () => {
    cy.findByTestId("button-submit").should("be.disabled");
  });

  it("cannot be moved to the next step if the id form is invalid", () => {
    cy.findByTestId("input-id").type("namu");
    cy.findByTestId("input-password").type("abcdefgh");
    cy.findByTestId("input-password-confirm").type("abcdefgh");
    cy.findByTestId("button-submit").should("be.disabled");
  });

  it("cannot be moved to the next step if the password form is invalid", () => {
    cy.findByTestId("input-id").type("namoo");
    cy.findByTestId("input-password").type("abcde");
    cy.findByTestId("input-password-confirm").type("abcde");
    cy.findByTestId("button-submit").should("be.disabled");
  });

  it("cannot be moved to the next step if the password confirm form is invalid", () => {
    cy.findByTestId("input-id").type("namoo");
    cy.findByTestId("input-password").type("abcdefgh");
    cy.findByTestId("input-password-confirm").type("abcdefg");
    cy.findByTestId("button-submit").should("be.disabled");
  });

  it("can navigate to the next step if the form is valid", () => {
    cy.findByTestId("input-id").type("namoo");
    cy.findByTestId("input-password").type("abcdefgh");
    cy.findByTestId("input-password-confirm").type("abcdefgh");
    cy.findByTestId("button-submit").should("not.be.disabled");

    cy.findByTestId("button-submit").click();
    cy.url().should("include", "/signup/profile");
  });
});

describe("Sign up : Profile", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/signup/profile");
  });

  it("should show a profile form", () => {
    cy.findByText("Let me know your profile.").should("exist");
    cy.findByTestId("input-name").should("exist");
    cy.findByTestId("input-age").should("exist");
  });

  it("cannot be moved to the next step initially", () => {
    cy.findByTestId("button-submit").should("be.disabled");
  });

  it("cannot be moved to the next step if the name form is invalid", () => {
    cy.findByTestId("input-age").type("20");
    cy.findByTestId("button-submit").should("be.disabled");
  });

  it("cannot be moved to the next step if the age form is invalid", () => {
    cy.findByTestId("input-name").type("namoo");
    cy.findByTestId("input-age").type("14");
    cy.findByTestId("button-submit").should("be.disabled");
  });

  it("can navigate to the next step if the form is valid", () => {
    cy.findByTestId("input-name").type("namoo");
    cy.findByTestId("input-age").type("20");
    cy.findByTestId("button-submit").should("not.be.disabled");

    cy.findByTestId("button-submit").click();
    cy.url().should("include", "/signup/verification");
  });
});

describe("Sign up : Verification", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/signup/verification");
  });

  it("should show a verfication form", () => {
    cy.findByText("Are you human?").should("exist");
    cy.findByTestId("input-sentence").should("exist");
  });

  it("cannot be moved to the next step initially", () => {
    cy.findByTestId("button-submit").should("be.disabled");
  });

  it("cannot be moved to the next step if the input is not matched with the sentence", () => {
    cy.findByTestId("input-sentence").type("I'm a robot.");
    cy.findByTestId("button-submit").should("be.disabled");
  });

  it("can navigate to the next step if the input is matched with the sentence", () => {
    cy.findByTestId("input-sentence").type("I'm not a robot.");
    cy.findByTestId("button-submit").should("not.be.disabled");

    cy.findByTestId("button-submit").click();
    cy.url().should("include", "/signup/complete");
  });
});

describe("Sign up : Complete", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/signup/complete");
  });

  it("should show a completion message", () => {
    cy.findByText("Now you're on the namoo space!").should("exist");
  });
});
