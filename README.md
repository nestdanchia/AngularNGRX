# Angular Avanzado
La implementacion de ngrx con Angular en https://github.com/nestdanchia/ngrxRedux
Sigue las ramas del tutorial
Hola Alberto,la clase 5 del curso de escuela IT vimos interceptores este resumen de acuerdo a lo que entendí es correcto gracias 
1. Usario requiere operaciones que corresponden a una ruta privada "priv/monthbalances/
2. esto producirá llamada HTTP al Servidor con Token vació
3. El Token vacio esta configurado así en la cabecera de la petición
4. responsable interceptor token-interceptor.service servidor producira entonces error 401
5. interceptor catch-interceptor.service Resuelve el error
6. redirigiendo al usuario a la ruta /credentials/login y notificando al store mensaje de error
7. La nueva ruta es manejada por credential.component este dispone por defecto del path login y puede redireccionar
8. al path registration por lo cual Este componente credential.component
9. es responsable de a).registrar o b).identificar usuarios
10.Cambiara su comportamiento según el valor "data" de la ruta , enviando al store distintos mensajes 
a todo el que este subscripto al store como user-message.component esta subscripto 
mostrara los cambios del mensaje en nav
11.REUTILIZAMOS asi UN MiSMO COMPONENTE PARA DOS RUTAS DISTINTAS
12. Si Nos autenticamos y las credenciales fueron aceptadas el servidor nos envia un Token
13. credential.component notificara del nuevo estado del Token a store.service y del nuevo texto del mensaje
14. store.service almacena en memoria al token y al mensaje y notifica tanto token-interceptor.service quien esta subscripto a los cambios de Token
como a user-message.component
15. token-interceptor.service actualiza el valor de su propiedad token 
16. modificara la cabecera de la peticion HTTP saliente con el valor actualizado del token
17.catch-interceptor.service responde ahora solo por consola mostrando datos
npm update
 npm install --save rxjs-compat
 npm i -g rxjs-tslint
 rxjs-5-to-6-migrate -p src/tsconfig.app.json
