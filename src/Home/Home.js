import Header from "../header/Header";
import "./Home.css";
import img1 from "./images/computer.jpg";
import { FaCommentAlt, FaPencilAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="main-content">
        <div className="reddit-post">
          <div className="row">
            <div className="post-intro">
              <div className="title padd-30">Title</div>
              <div className="author padd-30">author</div>
              <div className="created_at padd-30">11/11/2011</div>
            </div>
          </div>
          <div className="post-image padd-30">
            <img src={img1} alt=""></img>
          </div>
        </div>
        <div className="reddit-comment">
          <form class="commentform">
            <div class="row">
              <div class="form-item col-6 name-field">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    id="name"
                  ></input>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="form-item col-6 text-field">
                <div class="form-group">
                  <textarea
                    class="form-control"
                    placeholder="Message"
                    id="message"
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="form-item col-12 padd-30">
                <button type="submit" class="btn">
                  Send comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="reddit-footer">
        &copy; Copyright 2022,
        <span style={{ color: "#10B7FF" }}> Reddit Team</span>
      </div>
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
