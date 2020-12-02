import React, { useEffect } from "react";
import "./Banner.css";
import SlideItem from "./SlideItem/SlideItem";
import axios from "../../dataMovie/axios";
import fetchMovie from "../../dataMovie/request";
import { useDispatch, useSelector } from "react-redux";
import { selectBanners, setBanners } from "../../features/bannersSlice";
import { useHistory } from "react-router-dom";
import { selectPath } from "../../features/pathSlice";

function Banner() {
  const dispatch = useDispatch();
  const banners = useSelector(selectBanners);
  const path = useSelector(selectPath);

  useEffect(() => {
    const fetch = () => {
      axios.get(fetchMovie.action).then((res) => {
        if (res) {
          dispatch(setBanners(res.data.results));
        }
      });
    };
    fetch();
    console.log(window.location.pathname);
  }, []);

  useEffect(() => {
    if (banners) {
      const autoSlide = () => {
        const li = document.querySelectorAll(".banner__slides ul li");
        li[1].classList.add("view");
        setInterval(() => {
          var currentIndex = 0;
          var currentSlide = document.querySelector(
            ".banner__slides ul li.view"
          );
          for (
            currentIndex = 0;
            (currentSlide = currentSlide.previousElementSibling);
            currentIndex++
          ) {}
          for (var i = 0; i < li.length; i++) {
            li[i].classList.remove("view");
          }
          if (currentIndex < banners.length - 1) {
            li[currentIndex].nextElementSibling.classList.add("view");
          } else {
            li[0].classList.add("view");
          }
        }, 10000);
      };

      autoSlide();
    }
  }, [banners]);

  return (
    <div className="banner">
      <div className="banner__fadeLeft"></div>
      <div className="banner__slides">
        <ul>
          {banners?.map((banner) => (
            <li key={banner.id}>
              <SlideItem
                id={banner.id}
                title={banner?.original_title || banner?.original_name}
                overview={banner.overview}
                vote={banner.vote_average}
                backdrop={banner.backdrop_path}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="banner__fadeTop"></div>
      <div className="banner__fadeBottom"></div>
      <div className="banner__fadeRight"></div>
    </div>
  );
}

export default Banner;
