cypress-cucumber-preprocessor

### Instalacion:

`npm install -D cypress-cucumber-preprocessor`

### Seteo Cypress:

Colocar esto en plugins: 

`cypress/plugins/index.js`

```js
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
``` 

dentro de la configuracion de Cypress:

`cypress.json`

{
  "testFiles": "**/*.feature"  
}

### configuracion:
Utilice cosmiconfig para crear una configuración para el complemento, por ejemplo, agregando la siguiente sección a su package.json:

```json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true 
}
``` 
