import user_icon from "../img/svg/Vector.svg";
import "../css/footer.css";

function Footer() {

  return (
    <div className="footer">
      <header className="footer-header">
        <div className="FooContec">
          <div className="FooReact">
            <h1>Echeco con el 💝 por vicio 6</h1>
            <div className="push"></div>
            <div className="user_icon">
              <img src={user_icon} className="user_icon" alt="user" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Footer;
