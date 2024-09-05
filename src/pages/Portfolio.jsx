import React from "react";
import project1 from "../assets/images/01-html-css-git-homework-demo.png";
import project2 from "../assets/images/02-advanced-css-homework-demo.png";
import project3 from "../assets/images/05-third-party-apis-homework-demo.png";
import project4 from "../assets/images/14-mvc-homework-demo-01.png";
import project5 from "../assets/images/20-react-homework-demo-01.png";
import project6 from "../assets/images/100-web-apis-challenge-demo.png";

export default function Portfolio() {
  return (
    <>
      <div>
        <h2>Bootcamp Portfolio</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
        <div className="col">
          <div className="card h-100">
            <img
              src={project1}
              className="card-img-top"
              alt="html-css-git-homework"
            />
            <div className="card-body">
              <h5 className="card-title">html-css-git-homework</h5>
              <p className="card-text">
                There are two types of Challenges in this course. Each one is designed to prepare you for a scenario that you're likely to encounter as a web developer.
              </p>
            </div>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/masoudciw/Homework-01"
                className="card-link"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={project2}
              className="card-img-top"
              alt="advanced-css-homework"
            />
            <div className="card-body">
              <h5 className="card-title">advanced-css-homework</h5>
              <p className="card-text">
                A portfolio of work can showcase your skills and talents to employers looking to fill a part-time or full-time position. An effective portfolio highlights your strongest work as well as the thought processes behind it.
              </p>
            </div>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/masoudciw/Homework-02"
                className="card-link"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={project3}
              className="card-img-top"
              alt="third-party-apis-homework"
            />
            <div className="card-body">
              <h5 className="card-title">third-party-apis-homework</h5>
              <p className="card-text">
                Create a simple task board application that allows a team to manage project tasks by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
              </p>
            </div>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/masoudwebprogrammer/social-network-api"
                className="card-link"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={project4}
              className="card-img-top"
              alt="mvc-homework"
            />
            <div className="card-body">
              <h5 className="card-title">mvc-homework</h5>
              <p className="card-text">
                Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies.
              </p>
            </div>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/masoudwebprogrammer/PWA-TEXT-EDITOR"
                className="card-link"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={project5}
              className="card-img-top"
              alt="react-homework"
            />
            <div className="card-body">
              <h5 className="card-title">react-homework</h5>
              <p className="card-text">
                Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies.
              </p>
            </div>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/masoudwebprogrammer/regex"
                className="card-link"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={project6}
              className="card-img-top"
              alt="web-apis-challenge"
            />
            <div className="card-body">
              <h5 className="card-title">web-apis-challenge</h5>
              <p className="card-text">
                In this challenge, you'll create a two-page website where users will input and view blog posts. It includes building a content form, dynamically rendering blog posts, and implementing a light/dark mode toggle.
              </p>
            </div>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/masoudwebprogrammer/Teck-Blog"
                className="card-link"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
