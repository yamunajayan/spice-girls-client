import { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import "../MentalHealth/MentalHealth.scss";
import Backarrowblue from "../../assets/icons/arrow_back_blue.svg";
import "./Workplace.scss";

function Workplace() {

    const [topics, setTopics] = useState([]);
    const [expandedId, setExpandedId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
      };

    const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id)); // Toggle the same id or collapse
    };
    
    useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get(
                "http://localhost:8080/events/workplace"
            );
            setTopics(response.data);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
   
    }
    fetchData();
    }, []);


    if (loading) {
        return <div>One moment please...</div>
    }

    if (error) {
        return <div>{error}</div>
    }
        
    return (
        <div className="workplace">
            <div className="workplace__nav-bar">
                <Link
                    to="/Workplace"
                    className="workplace__back-arrow"
                >
                    <img src={Backarrowblue} alt="Back arrow" onClick={handleGoBack}/>    
                </Link>

                <h2>Better Workplace</h2>
            </div>

            <article className="workplace__card">
            <ul className="workplace__card-topics">
                {topics.map((topic) => (
                    <li key={topic.id} className="workplace__card-items">
                    <h3
                        className="workplace__title"
                        onClick={() => toggleExpand(topic.id)}
                    >
                        {topic.title}
                    </h3>
                    {expandedId === topic.id && (
                        <div className="workplace__details">
                        <p className="workplace__description">
                            {topic.description}
                        </p>
                        <p className="workplace__info">{topic.event_type}</p>
                        <p className="workplace__info  workplace__info--date">
                            {topic.date.split("T")[0]}
                        </p>
                        <p className="workplace__info">{topic.location}</p>

                        <Link to={`/register/${topic.id}`}>
                            <button className="workplace__button">Register</button>
                        </Link>
                        </div>
                    )}
                    </li>
                ))}
                </ul>
            </article>
        </div>
    );

};




export default Workplace;
