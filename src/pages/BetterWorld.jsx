import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BetterWorld.scss";
import Backarrow from "../assets/icons/arrow_back.svg";



function BetterWorldPage() {

    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get//(API);
                setTopics(response.data);
            } catch (error) {
                setError("Failed to fetch");
                setLoading(false);
            }
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
        <div className="better-world">
            <h2>Better World</h2>

            <ul>
                {topics.map((topic, index) => (
                    <li key={index}>
                        {topic.name}
                    </li>
                ))}
            </ul>
        </div>
    );










};




export default BetterWorld;
