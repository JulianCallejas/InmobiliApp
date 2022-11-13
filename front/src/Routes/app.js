import { useState } from "react";
import Menu from "../compon/menu";
import Aside from "../compon/aside";
import Search from "../compon/Search";
import Display from "../compon/display";
import GetLoggedUser from "../service/login/loggedUser"


function App() {

    const [credenciales, setCredenciales] = useState(GetLoggedUser());


    return (
        <div>
            <Menu credenciales={credenciales} setCredenciales={setCredenciales} />
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
