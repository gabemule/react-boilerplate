import React from "react";
import MyImage from "../assets/dog.jpg";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <img src={MyImage} alt={'home image'} />
        </div>
    );
};

export default Home;
