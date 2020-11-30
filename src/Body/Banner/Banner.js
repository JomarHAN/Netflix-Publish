import React from "react";
import "./Banner.css";
import SlideItem from "./SlideItem/SlideItem";

function Banner() {
  const filmSlide = {
    name: "Hello World",
    overview: "bal bla bal balb ablblbasdkjnvs oslcmljen ksmcn ajwnelnvs",
    backdrop:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dddb8beb-7509-4c66-bc59-5e64fc25d614/d86kr7w-48890806-3bbd-4495-9e35-b3e729b7ddd5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGRkYjhiZWItNzUwOS00YzY2LWJjNTktNWU2NGZjMjVkNjE0XC9kODZrcjd3LTQ4ODkwODA2LTNiYmQtNDQ5NS05ZTM1LWIzZTcyOWI3ZGRkNS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Lm0WPenYKq8B8cHEcpm-mHxi8vIdPky00MBqJiMr7Sc",
  };
  return (
    <div className="banner">
      <SlideItem
        name={filmSlide.name}
        overview={filmSlide.overview}
        backdrop={filmSlide.backdrop}
      />
    </div>
  );
}

export default Banner;
