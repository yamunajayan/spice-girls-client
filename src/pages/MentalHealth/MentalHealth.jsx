import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../MentalHealth/MentalHealth.scss";
import Backarrowblue from "../../assets/icons/arrow_back_blue.svg";

function MentalHealth() {
  const [topics, setTopics] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8080/events/mental_health"
        );
        console.log(response.data); //(API);
        setTopics(response.data);
      } catch (error) {
        setError("Failed to fetch");
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

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id)); // Toggle the same id or collapse
  };

  console.log("Current topics state:");

  return (
    <div className="mental-health">
      <div className="mental-health__nav-bar">
        <Link to="/" className="mental-health__back-arrow">
          <img src={Backarrowblue} alt="Back arrow" />
        </Link>

        <h2>Better World</h2>
      </div>

      <article className="mental-health__card">
        <ul className="mental-health__card-topics">
          {topics.map((topic) => (
            <li key={topic.id} className="mental-health__card-items">
              <h3
                className="mental-health__title"
                onClick={() => toggleExpand(topic.id)}
              >
                {topic.title}
              </h3>
              {expandedId === topic.id && (
                <div className="mental-health__details">
                  <p className="mental-health__description">
                    {topic.description}
                  </p>
                  <p className="mental-health__info">{topic.event_type}</p>
                  <p className="mental-health__info  mental-health__info--date">
                    {topic.date.split("T")[0]}
                  </p>
                  <p className="mental-health__info">{topic.location}</p>

                  <Link to={`/register/${topic.id}`}>
                    <button className="mental-health__button">Register</button>
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default MentalHealth;
