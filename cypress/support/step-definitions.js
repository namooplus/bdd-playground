import {
  Then,
  When,
  defineParameterType,
} from "@badeball/cypress-cucumber-preprocessor";

/**
 * Parameter types
 */

defineParameterType({
  name: "이",
  regexp: /(이|가)/,
  transformer: (s) => s,
});

defineParameterType({
  name: "을",
  regexp: /(을|를)/,
  transformer: (s) => s,
});

/**
 * Mapper
 */

const URLMap = {
  "메인 페이지": "http://localhost:5500",
  "아이디/비밀번호 생성 페이지": "http://localhost:5500/signup/identification",
  "개인정보 입력 페이지": "http://localhost:5500/signup/profile",
  "인증 페이지": "http://localhost:5500/signup/verification",
  "회원가입 완료 페이지": "http://localhost:5500/signup/complete",
};

const IDMap = {
  "회원가입 버튼": "anchor-signup",
  "아이디 입력 폼": "input-id",
  "비밀번호 입력 폼": "input-password",
  "비밀번호 확인 폼": "input-password-confirm",
  "이름 입력 폼": "input-name",
  "나이 입력 폼": "input-age",
  "문장 입력 폼": "input-sentence",
  "다음 버튼": "button-submit",
};

/**
 * Step definitions
 */

When("{}에 방문하면", (page) => {
  cy.visit(URLMap[page]);
});

When("{}{을} 누르면", (target) => {
  cy.findByTestId(IDMap[target]).click();
});

When("{}에 {string}{을} 입력하면", (target, text) => {
  cy.findByTestId(IDMap[target]).type(text);
});

Then("{}{을} 누를 수 없다.", (target) => {
  cy.findByTestId(IDMap[target]).should("be.disabled");
});

Then("{}{을} 누를 수 있다.", (target) => {
  cy.findByTestId(IDMap[target]).should("be.not.disabled");
});

Then("{string}{이} 보인다.", (text) => {
  cy.findAllByText(text, { exact: false }).should("exist");
});

Then("{}로 이동된다.", (page) => {
  cy.url().should("include", URLMap[page]);
});
