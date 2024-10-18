import "../HomePage/HomePage.scss";
import globe from "../../assets/icons/globe.svg";
import group from "../../assets/icons/group.svg";

export default function HomePage() {
    return (
        <>
            <div className="hero">
                <div>
                    <h2>Hi, Yamuna</h2>
                    <p> Ready to help for better?</p>
                </div>
            </div>
            <div className="buttons">
                <button>
                    <img src={globe} alt="globe" />
                    <p>World</p>
                </button>
                <button>
                    <img src={group} alt="group" />
                    <p>Communities</p>
                </button>
                <button>
                    <img src={globe} alt="globe" />
                    <p>Work</p>
                </button>
                <button>
                    <img src={globe} alt="globe" />
                    <p>Volunteering</p>
                </button>
            </div>
        </>
    );
}
