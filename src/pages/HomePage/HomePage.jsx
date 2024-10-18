import "../HomePage/HomePage.scss";
import GlobeIcon from "../../assets/icons/globe.svg?react";
import GroupIcon from "../../assets/icons/group.svg?react";
import WorkIcon from "../../assets/icons/work.svg?react";
import VolunteerIcon from "../../assets/icons/volunteer.svg?react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div className="hero">
                <div className="hero__body">
                    <h2 className="hero__body--name">Hi, Yamuna</h2>
                    <p className="hero__body--text">
                        Ready to help for better?
                    </p>
                </div>
            </div>
            <div className="buttons">
                <Link to="/mentalhealth" className="button__link">
                    <button className="button">
                        <GlobeIcon className="button__icon" />
                        <p className="button__text">World</p>
                    </button>
                </Link>
                <button className="button">
                    <GroupIcon className="button__icon" />
                    <p className="button__text">Communities</p>
                </button>
                <button className="button">
                    <WorkIcon className="button__icon" />
                    <p className="button__text">Work</p>
                </button>
                <button className="button">
                    <VolunteerIcon className="button__icon" />
                    <p className="button__text">Volunteering</p>
                </button>
            </div>
        </>
    );
}
