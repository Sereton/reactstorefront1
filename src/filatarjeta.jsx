
import React from "react";
import Tarjeta from './tarjeta';
import "./filatarjeta.css";
const Filatarjeta = (props) => {
    let s=  Array.from({length: props.numcol}, (_, i) => i);
    return(
        <div className={props.clase}>
         {
         
         s.map(x =>
             <Tarjeta  clase={props.clasehija} />
         )}
        </div>
    )
    }

export default Filatarjeta;