import Post from "../post/Post";
import "./posts.css";

export default function Posts(props) {
  return (
    <div className="posts">
      {props.searchResult.map((p) => (
        
        <Post post={p} />
      ))}
    </div>
  );
}
