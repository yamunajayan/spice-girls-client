import "../Header/Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <h1 className="header__title">Bell For Better</h1>
            </Link>
            <div className="header__buttons">
                <button className="header__buttons--learn">Learn More</button>
                <button className="header__buttons--sign">Sign Up</button>
            </div>
        </div>
    );
}
