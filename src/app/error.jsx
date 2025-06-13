"use client"
import { useEffect } from "react";

const Error = ({error}) => {

    useEffect(()=>{
        // guaardar el error en una base de datos
        console.error(error)
    }, [error])
    return ( 
        <div>
            <h2>Algo ha fallado</h2>
            Error:
            {error.message}
        </div>
     );
}
 
export default Error;