import "./Banner.scss";
import image from "../../../../../assets/images/Image (1).png";
import arrow from "../../../../../assets/icons/Arrow.svg";

export const Banner = () => {
  return (
    <>
    <section className="banner">
      <img src={image} alt="background image" />
      <div className="intro">
        <div className="content">
          <div className="head">Let Your Home Be Unique</div>
          <div className="subhead">
            There are many variations of the passages of lorem Ipsum
            fromavailable,variations of the passages.
          </div>
        </div>
        <button>
          Get Started
          <img src={arrow} alt="arrow logo" />
        </button>
      </div>
    </section>
    </>
  );
};
