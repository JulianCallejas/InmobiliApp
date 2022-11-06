import { Api_get_innmuebles } from "./Api";
import "../css/inmu.css";

function Inmueble() {
  let inmuebleId =
    window.location.pathname.split("")[window.location.pathname.length - 1];
  let Data = Api_get_innmuebles();

  return (
    <div className="inmu">
      <section>
        {Data.filter((data) => data.idInmueble == inmuebleId).map((data) => {
          return (
            <div className="cont-inmu" key={data.idInmueble}>
              <h1>{data.titulo} </h1>
              <img
                src={
                  "https://img.trovit.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiIwMDA2ZTQ2Yy01ZTE2LTRkMzktYWZhZS0xMDEwZDViYjA2MTEvMDAwNmU0NmMtNWUxNi00ZDM5LWFmYWUtMTAxMGQ1YmIwNjExXzQwOGViZDY0LTY2NDktNDRhZi1hMjUxLTVlMWZhZmQ3NGM3Mi5qcGciLCJicmFuZCI6IlRST1ZJVCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjUyLCJoZWlnaHQiOjQ4MCwiZml0IjoiY292ZXIifX19"
                }
              />

              <h3 className="inm-city">{data.especificaciones.ciudad} </h3>
              <div className="price-inm">
                <h3>${data.especificaciones.valorArriendo} / mes</h3>
              </div>
              <div className="esp-inm">
                <div>
                  <h1>Descripción</h1>
                  <h3>
                    Habitaciones:
                    <strong> {data.especificaciones.habitaciones}</strong>
                  </h3>
                  <h3>
                    Baños:<strong> {data.especificaciones.baños}</strong>
                  </h3>
                  <h3>
                    Cocinas:<strong> {data.especificaciones.estrato}</strong>
                  </h3>
                  <h3>
                    Salas:<strong> {data.especificaciones.estrato}</strong>
                  </h3>
                </div>
                <div>
                  <p>
                    <h1>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries
                    </h1>
                    <h3>Dueño: {data.propietario}</h3>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Inmueble;
