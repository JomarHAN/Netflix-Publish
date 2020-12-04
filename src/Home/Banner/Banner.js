import React, { useEffect } from "react";
import "./Banner.css";
import SlideItem from "./SlideItem/SlideItem";
import axios from "../../dataMovie/axios";
import fetchMovie from "../../dataMovie/request";
import { useDispatch, useSelector } from "react-redux";
import { selectBanners, setBanners } from "../../features/bannersSlice";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  const dispatch = useDispatch();
  const banners = useSelector(selectBanners);

  useEffect(() => {
    const fetch = () => {
      axios.get(fetchMovie.banner).then((res) => {
        if (res) {
          dispatch(setBanners(res.data.results));
        }
      });
    };
    fetch();
  }, []);

  return (
    <div className="banner">
      <div className="banner__fadeLeft"></div>
      <div className="banner__slides">
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={5000}>
          {banners?.map((banner) => (
            <SlideItem
              key={banner.id}
              id={banner.id}
              title={banner?.original_title || banner?.original_name}
              overview={banner.overview}
              vote={banner.vote_average}
              backdrop={banner.backdrop_path}
            />
          ))}
        </Carousel>
      </div>
      <div className="banner__fadeTop"></div>
      <div className="banner__fadeBottom"></div>
      <div className="banner__fadeRight"></div>
    </div>
  );
}

export default Banner;
