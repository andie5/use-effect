import React, { useState, useEffect } from "react";
// Change the Reddit component to accept the subreddit as a prop,
// fetch the data based on that subreddit, and only re-run the effect when the
// prop changes

// 1. Destructure the `subreddit` from props:
const Reddit = ({ subreddit }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the data when the component mounts
    fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then((res) => res.json)
      .then((json) =>
        // Save the posts into state
        setPosts(json.data.children.map((c) => c.data))
      );
  }, [subreddit, setPosts]);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Reddit;
