import React, { useEffect, useRef, useState } from "react";

function FocusedInput() {
  // Store a ref to the input's DOM node
  const inputRef = useRef();

  // Store the input's value in state
  const [value, setValue] = useState("");

  useEffect(
    () => {
      // This runs AFTER the first render, // so the ref is already set.
      console.log("render");
      inputRef.current.focus();
    }, // The effect "depends on" inputRef
    [inputRef]
  );

  // Passing empty array is prone to bugs.
  //  It’s easy to forget to add an item to it if you add a dependency,
  // and if you miss a dependency, then that value will be stale the next time
  //  useEffect runs and it might cause problems.
  // when you say empty array [], you really mean it.
  useEffect(() => {
    console.log("mounted");
    return () => console.log("unmounting...");
  }, []); // <-- add this empty array

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default FocusedInput;
