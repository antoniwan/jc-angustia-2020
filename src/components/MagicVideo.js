import React, { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import MagicVideoMp4 from "../video/loop-optim.mp4";
import MagicVideoWebm from "../video/loop-optim.webm";

export default function MagicVideo() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = function (e) {
    const { scrollTop } = e.target.scrollingElement;
    setScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 2));
  });

  return (
    <section className="magic-video">
      <div className="magic-video-wrapper">
        <video
          className="video"
          poster="img/stage.jpg"
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
          style={{
            // top: `${820 + scrollTop / 20}px `,
            transform: `translateY(-${scrollTop / 3.5}px)`,
          }}
        >
          <source src={MagicVideoWebm} type="video/webm" />
          <source src={MagicVideoMp4} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
