import { Link } from "react-router-dom";
import { Api_get_innmuebles } from "./Api";
import GetInmueblesAvailable from "../service/inmuebles/getInmueblesAvailable"

import "../css/Display.css";

function Display() {
    const data = GetInmueblesAvailable(); 
  return (
    <div className="display-contect">
          {data.map((data) => {
              console.log(data.fotos[0]);
        return (
          <div
            className="contect"
            style={{
                backgroundImage: 'url("' + data.fotos[0] + '")',
            }}
            key={data.idInmueble}
          >
            <h2>{data.especificaciones.ciudad}</h2>
            <h3>${data.especificaciones.valorArriendo}</h3>
                <div className="hover-img">
                    <p>{data.descripcion}</p>
                    <div>
                        <Link to={{
                            pathname: "inmueble/" + data.idInmueble,
                            state: data  
                        }}
                            style={{ marginLeft: 75 }}>OK</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Display;
