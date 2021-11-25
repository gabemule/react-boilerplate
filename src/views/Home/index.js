import React from "react";

// assets
import MyImage from "@/assets/dog.jpg";
// components
import Bar from "@/components/Bar";
import Foo from "@/components/Foo";

const Home = () => {
    return (
        <div className={'home'}>
            <Bar>
                <h1> Home </h1>
            </Bar>
            <Foo>
                <img src={MyImage} alt={'home image'} />
            </Foo>
        </div>
    );
};

export default Home;
