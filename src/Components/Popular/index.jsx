import { Link } from 'react-router-dom'
import { dataCategory } from '../../utils/data'

export const Popular = () => {

    return (
        <section className="popular-tags section">
            <div className="container">
                <h2 className="title section-title" data-name="Popular tags">
                    Popular tags
                </h2>

                <div className="popular-tags-container d-grid">
                    {dataCategory.map((element, index) =>
                        <Link key={index} to={`category/${element.name}`} className="article">
                            <span className="tag-name">#{element.name}</span>
                            <img
                                src={element.image}
                                alt="popular"
                                className="article-image"
                            />
                        </Link>
                    )}

                </div>
            </div>
        </section>
    )
}
