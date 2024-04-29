import React from "react";

interface NavbarProps {
  Title: string;
  image: string;
  Buttontext: string;
  HomeText: string;
  SearchText: string;
}
export default function Navbar(props: NavbarProps) {
  return (
    <div className="w-100">
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img
              src={props.image}
              alt="Logo"
              width="60"
              height="60"
              className="d-inline-block align-text-center"
            />
            {props.Title}
          </span>
          <div
            className="collapse navbar-expand-lg container-fluid navbar-collapse justify-content-center w-100 align-items-center "
            id="navbarText"
          >
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100 align-items-center ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.HomeText}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder={props.SearchText}
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
