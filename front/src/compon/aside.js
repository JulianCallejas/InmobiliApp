import "../css/aside_cag.css";
import Arrow_icon from "../img/svg/arrowdown2.svg"

import Categorias from "./categoria";




function aside() {
   
    return(
       <div className="content">
            <aside>
                <div className="aside_cag">
                    <div className="dropbtn">
                        <div className="item_cag">Categorias <img src={Arrow_icon} className="arrow_icon" alt="user"/></div>
                        <div>{Categorias("Categorias")}</div>
                    </div>
                    <div className="dropbtn">
                        <div className="item_cag">Ciudad <img src={Arrow_icon} className="arrow_icon" alt="user" /></div>
                        <div>{Categorias("Ciudad")}</div>
                    </div>
                    <div className="dropbtn">
                        <div className="item_cag">Precio <img src={Arrow_icon} className="arrow_icon" alt="user" /></div>
                        <div>{Categorias("Precio")}</div>
                    </div>
                    <div className="dropbtn">
                        <div className="item_cag">Baños <img src={Arrow_icon} className="arrow_icon" alt="user" /></div>
                        <div>{Categorias("Baños")}</div>
                    </div>
                    <div className="dropbtn">
                        <div className="item_cag">Habitaciones <img src={Arrow_icon} className="arrow_icon" alt="user" /></div>
                        <div>{Categorias("Habitaciones")}</div>
                    </div>
                    <div className="dropbtn">
                        <div className="item_cag">Estrato <img src={Arrow_icon} className="arrow_icon" alt="user" /></div>
                        <div>{Categorias("Estrato")}</div>
                    </div>

                </div>
                
            </aside>
       </div> 
    );
}

export default aside;