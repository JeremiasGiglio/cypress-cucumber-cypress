import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as user from './actions';

Given (/^que me encuentro en la pagina de ingreso$/,() => {
  user.enterLoginPage();
});
And (/^cuento con una cuenta (.*)$/,(accountType) => {
  user.chooseAccountType(accountType);
});
When (/^ingreso mi usuario y contraseña$/,() => {
  user.fillLogin();
});
And (/^Presiono en ingresar$/,() => {
  user.pressLogin();
});
Then (/^deberia ser (.*)$/,(loginResult) => {
  user.checkLogin(loginResult)
});



