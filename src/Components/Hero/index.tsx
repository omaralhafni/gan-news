import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import { currentDate, handleDateTime } from "../../utils/date";
import "./style.css";

interface IStateHero {
  url: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
  title: string;
}

export const Hero = () => {
  const [data, setData] = useState<IStateHero[]>([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const params = Object.fromEntries([...searchParams]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=Trending&from=${currentDate}&sortBy=popularity&pageSize=9&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setData(data.articles));
  }, []);

  return (
    <section className="featured-articles section section-header-offset">
      {/* <input onChange={(e) => setSearchParams({ ...params, name: e.target.value })} />xxx */}
      <div className="featured-articles-container container d-grid">
        <div className="featured-content d-grid">
          {data.slice(0, 3).map((element, index) => (
            <a
              key={index}
              href={element.url}
              className={`article featured-article featured-article-${
                index + 1
              }`}
            >
              <img
                src={element.urlToImage || "assets/images/alternative.jpg"}
                alt="trend"
                className="article-image"
              />
              {/* <span className="article-category">Technology</span> */}

              <div className="article-data-container">
                <div className="article-data">
                  <span>{element.author}</span>
                  <span className="article-data-spacer"></span>
                  <span>{handleDateTime(element.publishedAt)}</span>
                </div>

                <h3 className="title article-title">{element.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="sidebar d-grid">
          <h3 className="title featured-content-title">Trending news</h3>

          {data.slice(3, 9).map((element, index) => (
            <a
              key={index}
              href={element.url}
              target="_blank"
              rel="noreferrer"
              className="trending-news-box"
            >
              <div className="trending-news-img-box trending-img-box">
                <span className="trending-number place-items-center">
                  0{index + 1}
                </span>
                <img
                  src={element.urlToImage}
                  alt="trend"
                  className="article-image"
                />
              </div>

              <div className="trending-news-data">
                <div className="article-data trending-article-data">
                  <span>
                    {element.author.length > 33
                      ? element.author.slice(0, 33).concat("..")
                      : element.author}
                  </span>
                </div>

                <h3 className="title article-title">
                  {element.title.length > 60
                    ? element.title.slice(0, 60).concat("..")
                    : element.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
