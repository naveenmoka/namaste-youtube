import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Gaming",
    "Songs",
    "Live",
    "Cinema",
    "Telugu Cinema",
    "Sports",
    "Cricket",
    "Recently upload",
  ];
  return (
    <div className="flex">
      {list.map((text, index) => (
        <Button key={index} name={text} />
      ))}
    </div>
  );
};

export default ButtonList;
