import Menu from "../compon/menu";
import Aside from "../compon/aside";
import Search from "../compon/Search";
import Display from "../compon/display";
import Footer from "../compon/footer";

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
      <Footer />
    </div>
  );
}

export default App;
