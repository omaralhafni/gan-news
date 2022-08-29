import { Link } from "react-router-dom"
import { dataCategory } from "../../utils/data"

export const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer-container container d-grid">
                <div className="company-data">
                    <Link to="/">
                        <h2 className="logo">Gan News</h2>
                    </Link>
                    <p className="company-description">
                        News site specialized in providing the latest local and international news.
                    </p>

                    <span className="copyright-notice">
                        &copy; {new Date().getFullYear()} Gan News.
                    </span>
                </div>

                <div />
                <div />

                <div>
                    <h6 className="title footer-title">Categories</h6>

                    <ul className="footer-list list">
                        {dataCategory.map((element, index) =>
                            <li key={index} className="list-item">
                                <Link key={index} to={`category/${element.name}`} className="list-link">
                                    {element.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

            </div>
        </footer>
    )
}
