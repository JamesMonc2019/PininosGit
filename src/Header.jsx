import React from 'react';

function Header({titulo}){
/*const EDAD = 18;
let MENSAJE;
if(EDAD >= 18 ){
    MENSAJE = 'Eres mayor de edad'
}else{
    MENSAJE = 'Te la pelaste eres menor de edad'
}*/

 // lugar seguro para codigo Java script
 //console.log(props);
    return(
        /*<h1>{MENSAJE}</h1>*/
        <h1 className="encabezado">{titulo}</h1>
    )
}

export default Header;