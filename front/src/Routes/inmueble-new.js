import Menu from "../compon/menu";
import Aside from "../compon/aside";
import Search from "../compon/Search";

import Footer from "../compon/footer";
import New from "../compon/new";

function InmuNew() {
  return (
    <div>
      <Menu />
      <Search />
      <div className="contect-flex-index">
        <div className="display">
          <New />
        </div>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default InmuNew;
