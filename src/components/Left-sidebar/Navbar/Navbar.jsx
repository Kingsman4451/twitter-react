import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="nav-list list-unstyled ps-3">
          <li className="nav-item">
            <NavLink
              className="nav-link fs-5 text-decoration-none text-dark p-0 d-flex align-items-center gap-3"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "600",
              })}
              to="/"
            >
              <i class="bi bi-house-heart fs-3" ></i>
              Home
            </NavLink>
          </li>

          <li className="nav-item d-flex align-items-center gap-3">
            <i class="bi bi-hash fs-3"></i>
            <span className="item-span fs-5">Explore</span>
          </li>

          <li className="nav-item d-flex align-items-center gap-3">
            <i class="bi bi-bell fs-3"></i>
            <span className="item-span fs-5">Notification</span>
          </li>

          <li className="nav-item d-flex align-items-center gap-3">
            <i class="bi bi-envelope fs-3"></i>
            <span className="item-span fs-5">Message</span>
          </li>

          <li className="nav-item d-flex align-items-center gap-3">
            <i class="bi bi-bookmark fs-3"></i>
            <span className="item-span fs-5">Bookmarks</span>
          </li>

          <li className="nav-item d-flex align-items-center gap-3">
            <i class="bi bi-list fs-3"></i>
            <span className="item-span fs-5">List</span>
          </li>

          <li className="nav-item d-flex align-items-center gap-3">
            <NavLink
              className="nav-link fs-5 text-decoration-none text-dark p-0 d-flex align-items-center gap-3"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "600",
              })}
              to="/profile"
            >
              <i class="bi bi-person fs-3"></i>
              Profile
            </NavLink>
          </li>

          <li className="nav-item d-flex align-items-center gap-3">
            <i class="bi bi-three-dots fs-3"></i>
            <span className="item-span fs-5">More</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
