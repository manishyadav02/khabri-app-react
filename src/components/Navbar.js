import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <b>News-React</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link  " aria-current="page" to="/">
                  <img
                    src="https://img.icons8.com/?size=48&id=QPmx9q7CoTrC&format=png"
                    alt=""
                    width="20"
                    height="20"
                  />
                  Home
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link className="nav-link  " aria-current="page" to="/About">
                  <img
                    src="https://img.icons8.com/?size=64&id=42773&format=png"
                    alt=""
                    width="20"
                    height="20"
                  />
                  About
                </Link>
              </li>

              <li className="nav-item dropdown mx-5">
                <a
                  className="nav-link   dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://image.shutterstock.com/image-vector/vector-globe-icon-world-260nw-445135627.jpg"
                    alt=""
                    width="20"
                    height="20"
                  />
                  Countries
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/uk">
                      <img
                        src="https://img.icons8.com/?size=64&id=NZmBIL-yknpE&format=png"
                        alt=""
                        width="20"
                        height="20"
                      />
                      United Kingdom
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/us">
                      <img
                        src="https://img.icons8.com/?size=48&id=15532&format=png"
                        alt=""
                        width="20"
                        height="20"
                      />
                      United States
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/in">
                      <img
                        src="https://img.icons8.com/?size=48&id=HgrhrvtEzvc1&format=png"
                        alt=""
                        width="20"
                        height="20"
                      />
                      India
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ae">
                      <img
                        src="https://img.icons8.com/?size=48&id=60211&format=png"
                        alt=""
                        width="20"
                        height="20"
                      />
                      United Arab Emirates
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/id">
                      <img
                        src="https://img.icons8.com/?size=48&id=GSBGRV7sPkxg&format=png"
                        alt=""
                        width="20"
                        height="20"
                      />
                      Indonesia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/au">
                      <img
                        src="https://img.icons8.com/?size=48&id=UN34m1KGQG9v&format=png"
                        alt=""
                        width="20"
                        height="20"
                      />
                      Australia
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown mx-5">
                <a
                  className="nav-link   dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://img.icons8.com/?size=48&id=o5KsPhFI1L5R&format=png"
                    alt=""
                    width="20"
                    height="20"
                  />
                  category
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/uk">
                      <img
                        src="https://img.icons8.com/?size=80&id=CazxudJH3N8i&format=png"
                        alt=""
                        width="20"
                        height="20"
                      />
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/us">
                      <img
                        src="https://image.shutterstock.com/image-vector/3d-icon-popcorn-vector-render-260nw-2137266911.jpg"
                        alt=""
                        width="20"
                        height="20"
                      />
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/in">
                      <img
                        src="https://img.icons8.com/?size=80&id=0IfLdWR1SxI3&format=png"
                        alt=""
                        width="20"
                        height="20"
                      />
                      General
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ae">
                      <img
                        src="https://img.icons8.com/?size=64&id=46599&format=png"
                        alt=""
                        width="20"
                        height="20"
                      />
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/id">
                      <img
                        src="https://img.icons8.com/isometric/80/binoculars.png"
                        alt=""
                        width="20"
                        height="20"
                      />
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/au">
                      <img
                        src="https://img.icons8.com/?size=48&id=AlkSAD2AzTQJ&format=png"
                        alt=""
                        width="20"
                        height="20"
                      />
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/au">
                      <img
                        src="https://img.icons8.com/?size=60&id=gShesypkbo1o&format=png"
                        alt=""
                        width="20"
                        height="20"
                      />
                      Technology
                    </Link>
                  </li>
                </ul>
               
              </li>
              
              <li className="nav-item">
                <Link className="nav-link  " aria-current="page" to="/Video">
                  <img
                    src="https://img.icons8.com/?size=64&id=TMIV5nMneLUt&format=png"
                    alt=""
                    width="22"
                    height="22"
                  />
                  Video
                </Link>
                </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
