#language: es

Característica: Login
Como usuario deseo ingresar a mi cuenta

Escenario: Ingreso Exitoso
Dado que me encuentro en la pagina de ingreso
Y cuento con una cuenta "premium"
Cuando ingreso mi usuario y contraseña
Y Presiono en ingresar
Entonces deberia ser "aceptado"


Escenario: Ingreso Fallido
Dado que me encuentro en la pagina de ingreso
Y cuento con una cuenta "incorrecta"
Cuando ingreso mi usuario y contraseña
Y Presiono en ingresar
Entonces deberia ser "rechazado"
