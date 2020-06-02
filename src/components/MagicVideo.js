import React, { useEffect } from "react";
import { jarallax, jarallaxVideo } from "jarallax";
import "jarallax/dist/jarallax.css";

export default function MagicVideo() {
  useEffect(() => {
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
      videoLoop: true,
      videoPlayOnlyVisible: false,
    });
  });

  return (
    <div
      className="magic-video  jarallax"
      data-video-src="https://vimeo.com/415724764"
    />
  );
}
