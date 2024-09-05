import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="header container-fluid sticky-top">
          <h1>
            Masoud Abdi Portfolio
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={currentPage === "About" ? "nav-link active" : "nav-link"} aria-current="page" href="#about" onClick={() => handlePageChange("About")}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"} aria-current="page" href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className={currentPage === "Resume" ? "nav-link active" : "nav-link"} aria-current="page" href="#resume" onClick={() => handlePageChange("Resume")}>
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className={currentPage === "Contact" ? "nav-link active" : "nav-link"} aria-current="page" href="#contact" onClick={() => handlePageChange("Contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavTabs;
