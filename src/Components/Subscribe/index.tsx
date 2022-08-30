import { HiOutlineMail } from "react-icons/hi";
import "./style.css";
export const Subscribe = () => {
  return (
    <section className="newsletter section">
      <div className="container">
        <h2 className="title section-title" data-name="Newsletter">
          Gan News
        </h2>

        <div className="form-container-inner">
          <h6 className="title newsletter-title">Subscribe to Gan News</h6>
          <p className="newsletter-description">
            Enter your e-mail to receive the latest news via your e-mail
          </p>

          <form action="" className="form">
            <input
              className="form-input"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="btn form-btn" type="submit">
              <HiOutlineMail size="35px" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
