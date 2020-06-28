import React, { useState } from "react";
import Reddit from "./Reddit";

// Reddit wrapper - change the subreddit so it's not hard-coded
const RedditWrapper = () => {
  // 2 pieces of state: one to hold the input value,
  // another to hold the current subreddit.
  const [inputValue, setValue] = useState("reactjs");
  //Why doesn't input value have to be a callback?
  const [subreddit, setSubreddit] = useState(inputValue);

  // Update the subreddit when the user presses enter
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(inputValue);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={(e) => setValue(e.target.value)} />
      </form>
      <Reddit subreddit={subreddit} />
    </>
  );
};

export default RedditWrapper;
