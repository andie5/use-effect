import React, { useState, useEffect } from "react";
// Change the Reddit component to accept the subreddit as a prop,
// fetch the data based on that subreddit, and only re-run the effect when the
// prop changes

// 1. Destructure the `subreddit` from props:
const Reddit = ({ subreddit }) => {
  const [posts, setPosts] = useState([]);
  const [err, setError] = useState(null);

  useEffect(() => {
    // Clear the error & data before fetching new data
    setError(null);
    setPosts([]);

    // Fetch the data when the component mounts
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw new Error("Could not fetch posts");
      })
      .then((res) => res.json())
      .then((json) =>
        // Save the posts into state
        setPosts(json.data.children.map((c) => c.data))
      )
      .catch((err) => {
        // Save the error in state
        setError(error.message);
      });
  }, [subreddit, setPosts]);

  return err != null ? (
    err
  ) : (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Reddit;
