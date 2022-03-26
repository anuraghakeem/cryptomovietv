
const VideoModal = ({ video }: any) => {
  return (
    <iframe
      width="960"
      height="540"
      src={`https://www.youtube.com/embed/${video.key}`}
      title="Trailer"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default VideoModal;
