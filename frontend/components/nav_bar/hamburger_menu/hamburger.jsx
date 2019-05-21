import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const HamburgerMenu = props => {
  const menu = document.querySelector(".hamburger-ul");
  const outSideMenu = document.querySelector(".hamburger-bkg");
  return (
    <>
      <section
        onClick={() => {
          menu.classList.toggle("slide");
          outSideMenu.classList.toggle("hidden");
        }}
        className="hamburger-bkg hidden"
      />
      <p
        onClick={() => {
          menu.classList.toggle("slide");
          outSideMenu.classList.toggle("hidden");
        }}
        className="hamburger-btn"
      >
        <FontAwesomeIcon icon={["fas", "bars"]} />
      </p>
      <ul className="hamburger-ul slide">
        <li
          onClick={() => {
            menu.classList.toggle("slide");
            outSideMenu.classList.toggle("hidden");
          }}
        >
          <Link to="/trending">
            Trending <FontAwesomeIcon icon={["fas", "fire"]} />
          </Link>
        </li>
        <li className="hmbg-separator" />
        <li>
          <a href="https://github.com/luqven/iTube">
            Github <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/luisballjr/">
            Linkedin <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </li>
        <li>
          <a href="https://angel.co/luis-h-ball">
            AngelList <FontAwesomeIcon icon={["fab", "angellist"]} />
          </a>
        </li>
      </ul>
    </>
  );
};
