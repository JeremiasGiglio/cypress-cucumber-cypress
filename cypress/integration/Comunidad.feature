#language: es

Característica: Comunidad
Deseo ingresar a mi comunidad 

Esquema del escenario: Deseo ingresar a mi <comunidad> para ingresar a <sector> y a <subsector>   
Dado que estoy ingresado como usuario premium
Cuando ingreso a la comunidad <comunidad>
Y ingreso en el sector <sector> 
Entonces deberia estar en la pagina de <pagina>  
Cuando ingreso al subsector <subsector>

Ejemplos: 
| comunidad          | sector    | pagina       | subsector |
| Edificio premium   | comercial | comprobantes | cuentas   |






