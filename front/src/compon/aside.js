import "../css/aside_cag.css";
import Arrow_icon from "../img/svg/arrowdown2.svg"




function Categorias(){
    console.log('Hola')
    return (
        <div className="dropdown-content">
            <div className="cag_content"></div>
            <div className="cag_content"></div>
            <div className="cag_content"></div>
        </div>
    )
}

function aside() {
    return(
       <div className="content">
            <aside>
                <div className="aside_cag">
                    <div className="dropbtn">
                        <div className="item_cag">Categorias <img src={Arrow_icon} className="arrow_icon" alt="user"/></div>
                        <div>{Categorias()}</div>
                    </div>
                    <div className="dropbtn">
                        <div className="item_cag">Ciudad <img src={Arrow_icon} className="arrow_icon" alt="user" /></div>
                        <div>{Categorias()}</div>
                    </div>
                    <div className="dropbtn">
                        <div className="item_cag">Precio <img src={Arrow_icon} className="arrow_icon" alt="user" /></div>
                        <div>{Categorias()}</div>
                    </div>
                    <div className="dropbtn">
                        <div className="item_cag">Baños <img src={Arrow_icon} className="arrow_icon" alt="user" /></div>
                        <div>{Categorias()}</div>
                    </div>
                    <div className="dropbtn">
                        <div className="item_cag">Habitaciones <img src={Arrow_icon} className="arrow_icon" alt="user" /></div>
                        <div>{Categorias()}</div>
                    </div>
                    <div className="dropbtn">
                        <div className="item_cag">Estrato <img src={Arrow_icon} className="arrow_icon" alt="user" /></div>
                        <div>{Categorias()}</div>
                    </div>

                </div>
                
            </aside>
       </div> 
    );
}

export default aside;