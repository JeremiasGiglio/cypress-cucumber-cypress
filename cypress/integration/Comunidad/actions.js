/// <reference types="cypress" />

import * as user from '../Login/actions';
function premiumLogin(){
  user.enterLoginPage();
  user.chooseAccountType("premium");
  user.fillLogin();
  user.pressLogin();
  user.checkLogin("aceptado")
}

function enterComunidad(comunityName){
  cy.xpath("//span[contains(text(),'"+comunityName+"') and contains(@class, 'ng-binding')]").as("Comunidad").should("be.visible");
  cy.get("@Comunidad").click();
}

function selectSector(comunitysector){
  switch (comunitysector){
    case "comercial":
      cy.xpath("//*[contains(@class, 'ion-social-usd')]/..").as("Comercial").should("be.visible");
      cy.get("@Comercial").click();
  }

}
function contabilitySelet(contabilityoption){
  switch (contabilityoption){
    case "cuentas":
      cy.xpath("//*[contains(@class, 'ion-plus')]/..").as("Cuentas").should("be.visible");
      cy.get("@Cuentas").click();
  }
}

//Put in common steps
function checkSite(site){
  switch (site){
    case "comprobantes":
      cy.url().should('eq', 'https://isay.com.ar/app/#/app/pago/comprobantes');
  }
}
  


export {
    premiumLogin,
    enterComunidad,
    selectSector,
    contabilitySelet,
    checkSite
  };