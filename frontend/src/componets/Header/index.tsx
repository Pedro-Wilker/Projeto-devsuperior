import logo from "../../assets/img/logo-1.svg";
import "./style.css";

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta"/>
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/pedro-wilker">@pedro-wilker</a>
                </p>
            </div>
        </header>
    )
}

export default Header;