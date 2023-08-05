
const VideoYoutube = ({ videoId }: { videoId: string }) => {

  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0`;

  return (
    <div className="video-container">
      <iframe
        className=" rounded-t-xl"
        title="YouTube video player"
        width="100%"
        height="450"
        src={videoUrl}
        allowFullScreen
      />
    </div>
  );
};

export default VideoYoutube;