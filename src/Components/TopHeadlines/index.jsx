import { useEffect, useState } from 'react'

export const TopHeadlines = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(
            "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=269d8db6636e478da7fce16e4eb68582"
        )
            .then((response) => response.json())
            .then((data) => setData(data.articles));
    }, [])

    return (
        <section className="older-posts section">
            <div className="container">
                <h2 className="title section-title" data-name="Older posts">
                    Top Headlines
                </h2>

                <div className="older-posts-grid-wrapper d-grid">
                    {data?.slice(0, 6)?.map((element, index) =>
                        <a key={index} href={element?.url} className="article d-grid">
                            <div className="older-posts-article-image-wrapper">
                                <img
                                    src={element?.urlToImage}
                                    className="article-image"
                                    alt="top news"
                                />
                            </div>

                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>23 Dec 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>3 Min read</span>
                                </div>

                                <h3 className="title article-title">{element?.title}</h3>
                                <p className="article-description">
                                    {element?.content.slice(0, 150)}...
                                </p>
                            </div>
                        </a>
                    )}
                </div>

                <div className="see-more-container">
                    <a href="#" className="btn see-more-btn place-items-center">
                        See more <i className="ri-arrow-right-s-line"></i>
                    </a>
                </div>
            </div>
        </section>)
}
