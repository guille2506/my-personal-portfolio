import { useEffect } from "react";

const HomeVideo = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.$) {
      $("#homeVideo").YTPlayer({
        videoURL: "https://www.youtube.com/watch?v=KR97TgpMyrc",
        containment: "#main", 
        autoPlay: true,
        mute: true,
        showControls: false,
        startAt: 0,
        opacity: 1,
        stopMovieOnBlur: false, 
        quality: "hd720", 
      });
    }
  }, []);

  return <div id="homeVideo" className="absolute top-0 left-0 w-full h-full z-0"></div>;
};

export default HomeVideo;
