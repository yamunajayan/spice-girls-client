import "../Header/Header.scss";

export default function Header() {
    return (
        <div className="header">
            <h1 className="header__title">Bell For Better</h1>
            <div className="header__buttons">
                <button className="header__buttons--learn">Learn More</button>
                <button className="header__buttons--sign">Sign Up</button>
            </div>
        </div>
    );
}
