import { useState } from "react";

import Menu from "../compon/menu";
import Aside from "../compon/aside";
import Search from "../compon/Search";
import Display from "../compon/display";
import GetLoggedUser from "../service/login/loggedUser"
import Logout from "../service/login/logout";

function App() {

    const [credenciales, setCredenciales] = useState(GetLoggedUser());

    function salir() {
        Logout();
        setCredenciales(GetLoggedUser());
    }


    return (
        <div>
            <Menu credenciales={credenciales} salir={ salir } />
            <Search />
            <div className="contect-flex-index">
                <div className="display">
                    <Display />
                </div>
                <Aside />
            </div>
        </div>
    );
}

export default App;
