import React, { useEffect, useState } from "react";
// import Button from "@material-ui/core/Button";

const UseEffect = () => {

    const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("Hello useEffect");
    document.title =`Chats (${count})`
  });

  return (
    <>
      <div className="main__div">
        <h1 className="num__style"> {count} </h1>
        <button className="btn__style" onClick = {
            () => setCount(count + 1)
        }> Click Me 😄</button>
      </div>
    </>
  );
};

export default UseEffect;
