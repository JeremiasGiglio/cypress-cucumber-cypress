#language: es

Característica: Login
Como usuario deseo ingresar

Esquema del escenario: Ingreso a la pagina con <tipo de cuenta>
Dado que me encuentro en la pagina de ingreso
Y cuento con una cuenta <tipo de cuenta>
Cuando ingreso mi usuario y contraseña
Y Presiono en ingresar
Entonces deberia ser <estado>

Ejemplos: 

| tipo de cuenta    | estado    |
| premium           | aceptado  |
| Invalida          | rechazado |




