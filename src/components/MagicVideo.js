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
      data-video-src="https://vimeo.com/415724764"
    />
  );
}
