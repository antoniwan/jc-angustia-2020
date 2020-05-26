import React, { useEffect } from "react";
import { jarallax, jarallaxVideo } from "jarallax";

export default function MagicVideo() {
  useEffect(() => {
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  });

  return (
    <div
      className="magic-video  jarallax"
      data-video-src="https://www.youtube.com/watch?v=NL-AWrKqqb0&feature=youtu.be"
    />
  );
}
