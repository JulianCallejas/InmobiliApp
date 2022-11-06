import { useEffect, useState } from "react";

export function Api_get_innmuebles(){
    const [data, setData] = useState([])
  
    const x = () =>{
    fetch(`http://localhost:3000/inmueble`)
        .then( (response) => response.json())
        .then((json)=>  {
        setData(json);
        })// output will be the required data
        .catch( (error) => console.log(error))
    }; 

    useEffect(() =>{
        x();
    }, []);

    return (
        data
    );
}

export function Api_especificaciones(){
    const [data, setData] = useState([])
  
    const x = () =>{
    fetch(`http://localhost:3000/inmueble`)
        .then( (response) => response.json())
        .then((json)=>  {
        setData(json);
        })// output will be the required data
        .catch( (error) => console.log(error))
    }; 

    useEffect(() =>{
        x();
    }, []);

    return (
        data.especificaciones
    );
}