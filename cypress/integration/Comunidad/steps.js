import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as user from './actions';

Given ('que estoy ingresado como usuario premium',() => {
  user.premiumLogin();
});





