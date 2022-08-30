import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { currentDate } from "../../utils/date";
import "./style.css";

interface IStateCategoryData {
  urlToImage: string;
  title: string;
}

export const Category = () => {
  const params = useParams();
  const [data, setData] = useState<IStateCategoryData[][]>([]);
  const [total, setTotal] = useState(12);
  const [ImageData, setImageData] = useState();

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${params.category}&from=${currentDate}&sortBy=popularity&pageSize=${total}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    )
      .then((response) => response.json())
      .then((res) => {
        let newData: any[] = [];
        res?.articles?.forEach((_: any, index: number) => {
          if (index % 12 === 0) {
            newData.push(res?.articles?.slice(index, index + 12));
          }
        });
        setData(newData);
      });
    fetch(
      `https://api.unsplash.com/search/photos/?query=${params.category}&per_page=1&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    )
      .then((response) => response.json())
      .then((res) => setImageData(res?.results[0]?.urls?.full));
  }, [total, params.category]);

  return (
    <>
      {data.length ? (
        <>
          <section className="blog-post section-header-offset">
            <div className="blog-post-container container">
              <div className="blog-post-data">
                <h3 className="title blog-post-title">{params.category}</h3>
                <div className="article-data" />
                <img
                  src={ImageData}
                  //  || "/assets/images/alternative.jpg"
                  alt="banner"
                />
              </div>
            </div>
          </section>

          <section className="featured-articles section section-header-offset">
            {data?.map((arr, idx) => (
              <div
                key={idx}
                className="featured-articles-container-x container featured-content d-grid"
              >
                {arr?.map((element, index) => (
                  <a
                    key={index}
                    href="./post.html"
                    className={`article featured-article-x-${index + 1}`}
                  >
                    <img
                      src={element?.urlToImage}
                      className="article-image"
                      alt="category"
                    />

                    <div className="article-data-container">
                      <h3 className="title article-title">
                        {element?.title?.length > 33
                          ? element?.title.slice(0, 33).concat("...")
                          : element?.title}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            ))}
            <div className="container-more">
              <button className="btn-more" onClick={() => setTotal(total * 2)}>
                more
              </button>
            </div>
          </section>
        </>
      ) : (
        <div className="no-data">
          <p>There is no News </p>
        </div>
      )}
    </>
  );
};
