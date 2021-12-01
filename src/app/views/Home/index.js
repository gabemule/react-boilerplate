import React from "react";

// assets
import MyImage from "@/assets/img/dog.jpg";

// components
// import { Bar } from "@/components/Bar";
// import { Foo } from "@/components/Foo";
// import Button from "@/components/Button";
import { Bar, Button, Foo } from "@gabemule/react-boilerplate";

const Home = () => {
  return (
    <div className={"home"}>
      <Bar>
        <h1> Home </h1>
      </Bar>
      <Foo>
        <Button
          primary={true}
          size={"large"}
          label={"Click Me"}
          onClick={() => alert("clicked")}
        />
      </Foo>
      <Bar>
        <img src={MyImage} alt={"home image"} />
      </Bar>
    </div>
  );
};

export default Home;
