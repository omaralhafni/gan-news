import React from 'react'
import { Link } from 'react-router-dom'

export const Popular = () => {
    const data = [
        {
            name: "Nature",
            image: "assets/images/tags/nature.jpg"
        },
        {
            name: "Fitness",
            image: "assets/images/tags/fitness.jpg"
        },
        {
            name: "Travel",
            image: "assets/images/tags/travel.jpg"
        },
        {
            name: "Food",
            image: "assets/images/tags/food.jpg"
        },
        {
            name: "Technology",
            image: "assets/images/tags/technology.jpg"
        },
        {
            name: "Health",
            image: "assets/images/tags/health.jpg"
        },


    ]
    return (
        <section className="popular-tags section">
            <div className="container">
                <h2 className="title section-title" data-name="Popular tags">
                    Popular tags
                </h2>

                <div className="popular-tags-container d-grid">
                    {data.map((element, index) =>
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
