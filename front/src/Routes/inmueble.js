import Menu from "../compon/menu";
import Aside from "../compon/aside";
import Search from "../compon/Search";
import Inmueble from "../compon/inmu";
import Footer from "../compon/footer";

function Inmu1() {
  return (
    <div>
      <Menu />
      <Search />
      <div className="contect-flex-index">
        <div className="display">
          <Inmueble />
        </div>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default Inmu1;
