interface VIDEO {
  site: string;
  type: string;
  key: string;
}

interface VIDEOMODALCONTEXT {
  video?: VIDEO;
}

const VideoModal = ({ video }: VIDEOMODALCONTEXT) => {
  return (
    <>
      {!!video && (
        <iframe
          // width="960"
          // height="540"
          src={`https://www.youtube.com/embed/${video.key}`}
          title="Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-screen p-2 h-60 sm:h-96 md:h-128 lg:h-156"
        />
      )}
    </>
  );
};

export default VideoModal;
