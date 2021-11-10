import { Given, And, When, Then, then } from 'cypress-cucumber-preprocessor/steps';
import * as user from './actions';

Given (/^que estoy ingresado como usuario premium$/,() => {
  user.premiumLogin();
});
When(/^ingreso a la comunidad (.*)$/,(comunityName) =>{
 user.enterComunidad(comunityName)
});
And(/^ingreso en el sector (.*)$/,(comunitysector) =>{
  user.selectSector(comunitysector);
  
 });
 
Then(/^deberia estar en la pagina de (.*)$/,(site) =>{
  user.checkSite(site);
 });
 

When(/^ingreso al sector de (.*)$/,(contabilitySector) =>{
  user.contabilitySelet(contabilitySector)
 });





