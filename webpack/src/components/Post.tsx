import React from "react";
import { PostInterface } from "../interfaces/PostInterface";
const Post = (props: PostInterface) => {
  return (
    <section className="col-4">
      <div className="border rounded p-2">
        <h2>{props.title}</h2>
        <p>{props.author}</p>
      </div>
    </section>
  );
}

export default Post;