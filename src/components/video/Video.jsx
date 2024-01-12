import "./video.scss";
import VideoCard from "./videoCard/VideoCard";

const videos = [
  {
    id: 1,
    name: "persian",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ducimus pariatur tempora minima distinctio ea porro adipisci ut quo ",
    video: "kittyvideo.mp4"
  },
  {
    id: 2,
    name: "persian",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ducimus pariatur tempora minima distinctio ea porro adipisci ut quo enim.",
    video: "kittyvideo.mp4"
  },
  {
    id: 3,
    name: "persian",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ducimus pariatur tempora minima distinctio ea porro adipisci ut quo enim.",
    video: "kittyvideo.mp4"
  },
  
];

const Video = () => {
  return (
    <div className="video">
      <div className="wrapper">
        <div className="header">
          <h1>Check out our Purrrrs!</h1>
        </div>
        <div className="video-container">
          {videos.map((video) => (
            <VideoCard key={video.id} data={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
