import { useEffect, useState } from 'react'
import { BgCard } from '../BgCard';

export const TopHeadlines = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(
            `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=8&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
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
                    {data?.map((element, index) =>
                        <BgCard key={index} element={element} />
                    )}
                </div>
            </div>
        </section>)
}
