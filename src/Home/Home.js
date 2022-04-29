import Header from "../header/Header";
import "./Home.css";
import img1 from "./images/cyclops.jpg";
import { FaCommentAlt, FaPencilAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="main-content">
        <div className="reddit-post">
          <div className="row">
            <div className="post-image">
              <div>votes</div>
              <div>votes</div>
              <div>votes</div>
            </div>

            <div className="post-info">World</div>
          </div>
        </div>
      </div>

      {/* <div className="admin-footer">
        &copy; Copyright 2022,
        <span style={{ color: "#10B7FF" }}> Reddit Team</span>
      </div> */}
    </div>
  );
};

export default Home;

// 11
{
  /* <h1>Photo</h1>
<img src={img1} alt=""></img> */
}
// 22
{
  /* <span>Title</span>
            <span>Posted by: Author </span>
            <span>at: 11/11/1111</span>
          
            <h4>
              <FaCommentAlt className="comment-icon" />
              <span> 20</span> comments
            </h4> */
}
