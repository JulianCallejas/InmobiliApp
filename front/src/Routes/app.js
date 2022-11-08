import Menu from "../compon/menu";
import Aside from "../compon/aside";
import Search from "../compon/Search";
import Display from "../compon/display";

function App() {

    return (
        <div>
            <Menu />
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
