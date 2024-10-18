import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../MentalHealth/MentalHealth.scss";
import Backarrowblue from "../../assets/icons/arrow_back_blue.svg";
import "./Workplace.scss";

function Workplace() {

    // const [topics, setTopics] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    const [topics, setTopics] = useState([
        {name: "Mental Health for Everyone" },
        { name: "Protecting the Environment" },
        { name: "Safeguarding Data Privacy" },
        { name: "Accessible Technology for All" }
    ]);


    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get//(API);
    //             setTopics(response.data);
    //         } catch (error) {
    //             setError("Failed to fetch");
    //             setLoading(false);
    //         }
    //     }
    //     fetchData();
    // }, []);



    // if (loading) {
    //     return <div>One moment please...</div>
    // }

    // if (error) {
    //     return <div>{error}</div>
    // }
        
    return (
        <div className="workplace">
            <div className="workplace__nav-bar">
                <Link
                    to="/Workplace"
                    className="workplace__back-arrow"
                >
                    <img src={Backarrowblue} alt="Back arrow" />    
                </Link>

                <h2>Better Workplace</h2>
            </div>

            <article className="workplace__card">
                <ul className="workplace__card-topics">
                    {topics.map((topic, index) => (
                        <li key={index}>
                            {topic.name}
                        </li>
                    ))}
                </ul>
            </article>
        </div>
    );

};




export default Workplace;
