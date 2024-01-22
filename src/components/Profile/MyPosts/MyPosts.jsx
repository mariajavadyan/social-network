import "./MyPosts.css";
import React from "react";
import Post from "./Post/Post";

function MyPosts(props) {
  // let posts = [
  //   {
  //     id: 1,
  //     message: "My first post",
  //     likesCount: 15,
  //   },

  //   {
  //     id: 2,
  //     message: "My second post",
  //     likesCount: 12,
  //   },
  //   {
  //     id: 3,
  //     message: "My third post",
  //     likesCount: 17,
  //   },
  //   {
  //     id: 4,
  //     message: "My fourth post",
  //     likesCount: 14,
  //   },
  // ];

  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };

  return (
    <div className="postsBlock">
      <h3> My Posts </h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className="posts">{postsElements}</div>
    </div>
  );
}

export default MyPosts;
