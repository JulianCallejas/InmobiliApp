import { Link } from "react-router-dom";
import { Api_get_innmuebles } from "./Api";

import "../css/Display.css";

function Display() {
  const data = Api_get_innmuebles();

  return (
    <div className="display-contect">
      {data.map((data) => {
        return (
          <div
            className="contect"
            style={{
              backgroundImage: `url("https://img.trovit.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiIwMDA2ZTQ2Yy01ZTE2LTRkMzktYWZhZS0xMDEwZDViYjA2MTEvMDAwNmU0NmMtNWUxNi00ZDM5LWFmYWUtMTAxMGQ1YmIwNjExXzQwOGViZDY0LTY2NDktNDRhZi1hMjUxLTVlMWZhZmQ3NGM3Mi5qcGciLCJicmFuZCI6IlRST1ZJVCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjUyLCJoZWlnaHQiOjQ4MCwiZml0IjoiY292ZXIifX19")`,
            }}
            key={data.idInmueble}
          >
            <h2>{data.especificaciones.ciudad}</h2>
            <h3>${data.especificaciones.valorArriendo}</h3>
            <div className="hover-img">
              <p>Apartamento comodo en el piso más alto</p>
              <div>
                <Link to={"inmueble/"+data.idInmueble}>OK</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Display;
