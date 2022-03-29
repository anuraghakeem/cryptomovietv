
const VideoModal = ({ video }: any) => {
  return (
    <iframe
      // width="960"
      // height="540"
      src={`https://www.youtube.com/embed/${video.key}`}
      title="Trailer"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      className="w-screen p-2 h-60 sm:h-96 md:h-128 lg:h-156"
    ></iframe>
  );
};

export default VideoModal;
