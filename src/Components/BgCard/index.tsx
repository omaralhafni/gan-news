import { handleDateTime } from "../../utils/date";

interface IPropsBgCard {
  element: {
    url: string;
    urlToImage: string;
    author: string;
    publishedAt: string;
    title: string;
    content: string;
  };
}
export const BgCard = ({ element }: IPropsBgCard) => {
  return (
    <a href={element?.url} className="article d-grid">
      <div className="older-posts-article-image-wrapper">
        <img
          src={element?.urlToImage}
          className="article-image"
          alt="top news"
        />
      </div>

      <div className="article-data-container">
        <div className="article-data">
          <span>{element?.author}</span>
          <span className="article-data-spacer"></span>
          <span>{handleDateTime(element.publishedAt)}</span>
        </div>

        <h3 className="title article-title">{element?.title}</h3>
        <p className="article-description">
          {element?.content.slice(0, 150)}...
        </p>
      </div>
    </a>
  );
};
