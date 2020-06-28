import React, { useEffect, useState } from "react";

const LogEffect = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("latest value:", text);
  });

  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

export default LogEffect;
