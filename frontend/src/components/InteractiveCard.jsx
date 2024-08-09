import React, { useState } from "react";
import { Card, CardBody, Checkbox } from "@nextui-org/react";

const InteractiveCard = ({ text }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // Reset the effect after 300ms
  };

  return (
    <Card
      shadow="sm"
      className={`flex justify-center items-center transition-transform duration-300 ${
        isClicked ? "bg-blue-100 scale-105 ring-2 ring-blue-500" : ""
      }`}
      
    >
      <CardBody>
        <div className="flex">
          <p className="mr-4">{text}</p>
          <Checkbox onClick={handleClick}></Checkbox>
        </div>
      </CardBody>
    </Card>
  );
};
export default InteractiveCard
