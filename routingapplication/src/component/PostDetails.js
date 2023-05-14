import React from "react";

export const PostDetails = (props) => {
  console.log(props);
  console.log(props.match.params.topic);
  const name = props.match.params.topic;
  return (
    <>
      <h1>{name}</h1>
      {name === "react" ?
      (
        <div className="panel panel-success">
          <div className="panel-heading">React details</div>
          <div className="panel-body">
            React can be used to build web, mobile, and desktop applications,
            making it a versatile framework for cross-platform development.
            React Native, a framework based on React, is specifically designed
            for mobile app development, while React Desktop allows you to create
            desktop applications using web technologies.
          </div>
        </div>
      ): name === "node" ? (
        <div className="panel panel-success">
        <div className="panel-heading">Node details</div>
        <div className="panel-body">
          Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.
        </div>
      </div>
         
      ): name === "Javascript" ? (
        <div className="panel panel-success">
        <div className="panel-heading">Javascript details</div>
        <div className="panel-body">
        Javascript is a single-threaded language, meaning that just one line of code may be run at once. Javascript is single-threaded because, originally, it was only a web browser scripting language created to serve the needs of a single user on a single window of the browser, eliminating the need for multithreading. Additionally, the asynchronous programming capabilities provided by Javascript through the event loop were a perfect method to get around the blocking behaviour and operate as smoothly as a multi-threaded application.
        </div>
      </div>
      ): <div></div>
      
      }
    </>
  );
};




