import "./Post.css";

function Post(props) {
  return (
    <div className="item1">
      <img
        src="https://media.printables.com/media/prints/550359/images/4421183_7c3ad661-3542-4a04-83ed-21466b813ff6/thumbs/inside/1280x960/png/baby-yoda-jedi-health.webp"
        alt="post"
      />
      {props.message}
      <div>
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  );
}

export default Post;
