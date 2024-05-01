import React, { Component } from "react";
import {FaHome, FaPlane, FaHotel } from "react-icons/fa";

interface NavbarProps {
  Title: string;
  Buttontext: string;
  HomeText: string;
  SearchText: string;
  image: string;
}
export default function Navbar(props: NavbarProps) {
  return (
    <div className="w-100 ">
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
            <div className="collapse navbar-collapse" id="navbarScroll">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

              <ul className="navbar-nav me-auto mb-2 navbar-nav-scroll mb-lg-0 justify-content-center w-100 align-items-center ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <FaHome />
                    {props.HomeText}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FaPlane />
                    Flights
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FaHotel />
                    {props.Buttontext}
                  </a>
                </li>
              </ul>
            </div>
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
