import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Community/Community.scss";
import Backarrowblue from "../../assets/icons/arrow_back_blue.svg";



function Community() {

    const [headings, setHeadings] = useState([]);
    const [expandedHeadingId, setExpandedHeadingId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    "http://localhost:8080/events/community"
                );
                setHeadings(response.data);
            } catch (error) {
                setError("Failed to fetch");
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const toggleExpand = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id)); // Toggle the same id or collapse
      };



    if (loading) {
        return <div>One moment please...</div>
    }

    if (error) {
        return <div>{error}</div>
    }
        


    return (
        <div className="community">
            <div className="community__nav-bar">
                <Link to="/" className="community__back-arrow">
                    <img src={Backarrowblue} alt="Back arrow" />    
                </Link>

                <h2>Community</h2>
            </div>

            <article className="community__card">
                <ul className="community__card-heading">
                    {headings.map((heading) => (
                        <li key={heading.id} className="community__card-items">
                            <h3
                                 className="community__title"
                                 onClick={() => toggleExpand(heading.id)}
                            >
                                {topic.title}
                            </h3>
                            {expandedId === topic.id && (
                                <div className="community__details">
                                <p className="community__description">
                                    {topic.description}
                                </p>
                                <p className="community__info">{topic.event_type}</p>
                                <p className="community__info  community__info--date">
                                    {heading.date.split("T")[0]}
                                </p>
                                <p className="community__info">{heading.location}</p>

                                <Link to={`/register/${heading.id}`}>
                                    <button className="community__button">Register</button>
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




export default Community;
