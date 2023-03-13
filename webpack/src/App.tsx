import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import Count from "./Count";
import { getPosts } from "./services/postServices";

export const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // fonction fléchée anonyme immédiate pour la déclarer async
    (async () => {
      // Récupération des posts
      const fetched_posts = await getPosts();
      console.log(`fetched_posts`, fetched_posts);
      setPosts(fetched_posts);
    })();
  }, []);
  return (
    <div className='container' >
      <h1>Liste des posts</h1>
      <div className="row">
        {posts.map((post) => <Post key={post.id} {...post} />)}
      </div>
    </div >
  )
};