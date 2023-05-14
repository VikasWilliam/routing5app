import React from "react";
import {Link} from "react-router-dom";

const Post = () => {
  return (
    <div classNameName="panel panel-warning">
      <div className="panel-heading">Post Page</div>
      <div className="panel-body">
        PLorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <h1><Link to="/Post/Javascript"><button className="btn btn-success">Javascript</button></Link></h1>
      <h1> <Link to="/Post/react"><button className="btn btn-danger">react</button></Link></h1>
      <h1> <Link to="/Post/node"><button className="btn btn-warning">Node</button></Link></h1>
    </div>
  );
};

export default Post;
