import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">
            Divine <br></br> Parking
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to={"/"} className="active">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to={"/booking-list"}>
              <i className="bx bx-box"></i>
              <span className="links_name">Booking Lists</span>
            </Link>
          </li>
          <li>
            <Link to={"/slots-lists"}>
              <i className="bx bx-list-ul"></i>
              <span className="links_name">Slots Lists</span>
            </Link>
          </li>
          <li>
            <Link to={"/view-flors"}>
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Flors List</span>
            </Link>
          </li>
          <li>
            <Link to={"/payments"}>
              <i className="bx bx-user"></i>
              <span className="links_name">Pyments</span>
            </Link>
          </li>
          <li>
            <Link to={"/messages"}>
              <i className="bx bx-message"></i>
              <span className="links_name">Messages</span>
            </Link>
          </li>
          <li>
            <Link to={"/add-flors"}>
              <i className="bx bx-heart"></i>
              <span className="links_name">Add Flors</span>
            </Link>
          </li>
          <li>
            <Link to={"/add-slots"}>
              <i className="bx bx-heart"></i>
              <span className="links_name">Add Slots</span>
            </Link>
          </li>
          <li>
            <Link to={"/settings"}>
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </Link>
          </li>
          <li className="log_out">
            <Link to={"/log-out"}>
              <i className="bx bx-log-out"></i>
              <span className="links_name">Log out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
