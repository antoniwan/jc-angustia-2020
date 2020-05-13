import React, { useState, useEffect } from "react";
import MagicVideoMp4 from "../video/loop-optim.mp4";
import MagicVideoWebm from "../video/loop-optim.webm";

export default function MagicVideo() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = function (e) {
    const { scrollTop } = e.target.scrollingElement;
    setScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div className="magic-video">
      <video
        className=""
        poster="img/stage.jpg"
        playsInline={true}
        autoPlay={true}
        muted={true}
        loop={true}
        style={{
          top: `${-500 + scrollTop / 5}px`,
        }}
      >
        <source src={MagicVideoWebm} type="video/webm" />
        <source src={MagicVideoMp4} type="video/mp4" />
      </video>
    </div>
  );
}