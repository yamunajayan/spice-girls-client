import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Community/Community.scss";
import Backarrowblue from "../../assets/icons/arrow_back_blue.svg";



function Community() {

    // const [topics, setTopics] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    const [headings, setHeadings] = useState([
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
        <div className="community">
            <div className="community__nav-bar">
                <Link
                    to="/"
                    className="community__back-arrow"
                >
                    <img src={Backarrowblue} alt="Back arrow" />    
                </Link>

                <h2>Community</h2>
            </div>

            <article className="community__card">
                <ul className="community__card-heading">
                    {headings.map((heading, index) => (
                        <li key={index}>
                            {heading.name}
                        </li>
                    ))}
                </ul>
            </article>
        </div>
    );










};




export default Community;
