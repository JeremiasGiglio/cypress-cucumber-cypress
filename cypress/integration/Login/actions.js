/// <reference types="cypress" />

function enterLoginPage(){
    cy.visit("/")
}

function chooseAccountType(accountType){
    if(accountType == "premium"){
        const user = "isaytest21@gmail.com";
        const password = "Testing05"
        Cypress.env("user", user)
        Cypress.env("password", password)
        console.log(Cypress.env("user"))
        console.log(Cypress.env("password"))
      
      }
      else{
        const user = "isaytedsadaada@gmail.com";
        const password = "Testsdadadaing05"
        Cypress.env("user", user)
        Cypress.env("password", password)
      }
}

function fillLogin(){
    cy.get('input[placeholder="e-mail"]').as('email').should('be.visible'); 
    cy.get('input[placeholder="contraseña"]').as('password'); 
    cy.wait(5000)
    cy.get("@email").type(Cypress.env("user"));
    cy.get("@password").type(Cypress.env("password"));
}

function pressLogin(){
    cy.get('button[ng-click="login(usuario)"]').as('loginButtom');
    cy.get('@loginButtom').click();
}
 
function checkLogin(loginResult){
    if(loginResult == "aceptado"){
      cy.url().should('eq', 'https://isay.com.ar/app/#/app_sh/autenticacion');
    
    }
    else{
      cy.contains('Usuario/contraseña incorrecto!')
      cy.url().should('eq', 'https://isay.com.ar/app/#/app_sh/autenticacion')
    }
}
  



export {
    enterLoginPage,
    chooseAccountType,
    fillLogin,
    pressLogin,
    checkLogin
  };