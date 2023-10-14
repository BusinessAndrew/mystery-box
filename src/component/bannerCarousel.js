import React from "react";
// import img from "../assets/images/box/roll (1).webp";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const images = [
    {
      url: require("../assets/images/box/roll (13).webp"),
    },
    {
      url: require("../assets/images/box/roll (5).webp"),
    },
    {
      url: require("../assets/images/box/roll (17).webp"),
    },
    {
      url: require("../assets/images/box/roll (3).webp"),
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1.06,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    className: "theme-dots",
  };

  return (
    <div className="overflow-hidden ratio_55">
      <Slider {...sliderSettings}>
        {images.map((item, index) => {
          return (
            <div key={index}>
              {/* <div
                style={{
                  backgroundImage: `url(${item.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  display: "none",
                  height: "100%",
                  maxHeight: "355px",
                }}
              > */}
              <img
                src={item.url}
                className="slider-box bg-size"
                // className="img-fluid bg-img"
                alt=""
                style={{
                  // display: "none",
                  objectFit: "cover",
                  width: "100%",
                  height: "355px",
                }}
              ></img>
              {/* <div className="slider-content">
                  <div>
                    <h2>Welcome To Multikart</h2>
                    <h1>Flat 50% OFF</h1>
                    <h6>Free Shipping Till Mid Night</h6>
                    <Link to="shop" className="btn btn-solid">
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
