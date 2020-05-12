import React from "react";
import MagicVideoMp4 from "../video/loop-optim.mp4";
import MagicVideoWebm from "../video/loop-optim.webm";

export default function MagicVideo() {
  return (
    <div className="magic-video">
      <video
        className=""
        poster="img/stage.jpg"
        playsInline={true}
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source src={MagicVideoWebm} type="video/webm" />
        <source src={MagicVideoMp4} type="video/mp4" />
      </video>
    </div>
  );
}
