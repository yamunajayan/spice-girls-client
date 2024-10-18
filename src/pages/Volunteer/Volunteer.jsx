import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Volunteer.scss";
import Backarrowblue from "../../assets/icons/arrow_back_blue.svg";

function Volunteer() {
  const [topics, setTopics] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8080/events/volunteer"
        );
        console.log(response.data); //(API);
        setTopics(response.data);
      } catch (error) {
        setError("Failed to fetch");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  //   if (loading) {
  //     return <div>One moment please...</div>;
  //   } else {
  //     console.log("Current topics state:");
  //   }

  //   if (error) {
  //     return <div>{error}</div>;
  //   }

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id)); // Toggle the same id or collapse
  };

  console.log("Current topics state:");

  return (
    <div className="volunteer">
      <div className="volunteer__nav-bar">
        <Link to="/" className="volunteer__back-arrow">
          <img src={Backarrowblue} alt="Back arrow" />
        </Link>

        <h2>Better World</h2>
      </div>

      <article className="volunteer__card">
        <ul className="volunteer__card-topics">
          {topics.map((topic) => (
            <li key={topic.id} className="volunteer__card-items">
              <h3
                className="volunteer__title"
                onClick={() => toggleExpand(topic.id)}
              >
                {topic.title}
              </h3>
              {expandedId === topic.id && (
                <div className="volunteer__details">
                  <p className="volunteer__description">{topic.description}</p>
                  <p className="volunteer__info">{topic.event_type}</p>
                  <p className="volunteer__info  volunteer__info--date">
                    {topic.date.split("T")[0]}
                  </p>
                  <p className="volunteer__info">{topic.location}</p>

                  <Link to={`/register/${topic.id}`}>
                    <button className="volunteer__button">Register</button>
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

export default Volunteer;
