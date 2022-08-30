import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Search } from "./Search";
import "./style.css";

export const NaveBar = () => {
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <>
      <header className="header" id="header">
        <nav className="navbar container">
          <NavLink to="/">
            <h2 className="logo">Gan News</h2>
          </NavLink>

          <div className="list list-right">
            <button
              onClick={() => setModalStatus(true)}
              className="btn place-items-center"
            >
              <FiSearch size="30px" color="#afb6cd" />
            </button>
          </div>
        </nav>
      </header>

      {modalStatus && <Search close={() => setModalStatus(false)} />}
    </>
  );
};
