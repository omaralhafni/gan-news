import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Search } from "./Search"
import { navData, options } from "./data"
import { MdLanguage } from "react-icons/md"
import { FiSearch } from "react-icons/fi"

export const NaveBar = () => {
    const [modalStatus, setModalStatus] = useState(false);
    return (
        <>
            <header className="header" id="header">
                <nav className="navbar container">
                    <a href="./index.html">
                        <h2 className="logo">Gan News</h2>
                    </a>

                    <div className="menu" id="menu">
                        <ul className="list">
                            {navData.map(item =>
                                <li className="list-item">
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => isActive ? "list-link current" : "list-link"}>
                                        {item.label}
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="list list-right">
                        <div className="dropdown">
                            <button className="drop-btn">
                                <MdLanguage size="35px" color="#afb6cd" />
                            </button>
                            <div className="dropdown-content">
                                {options.map(item => <img src={item.path} alt={item.alt} />)}
                            </div>
                        </div>
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
    )
}


