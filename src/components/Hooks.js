import React, { useEffect, useState, useRef } from "react";

function Hooks() {
  let [a, setA] = useState("");
  let inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <input value={a} ref={inputRef} onChange={(e) => setA(e.target.value)} />
    </>
  );
}

export default Hooks;
