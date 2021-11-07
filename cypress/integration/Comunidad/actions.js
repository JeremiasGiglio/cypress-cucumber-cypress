/// <reference types="cypress" />

import * as user from '../Login/actions';
function premiumLogin(){
  user.enterLoginPage();
  user.chooseAccountType("premium");
  user.fillLogin();
  user.pressLogin();
  user.checkLogin("aceptado")
}




export {
    premiumLogin
  };