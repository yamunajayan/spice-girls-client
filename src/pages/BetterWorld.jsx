import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BetterWorld.scss";



function BetterWorldPage() {

    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);




    if (loading) {
        return <div>One moment please...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }
        


    return (

    )










};




export default BetterWorld;
