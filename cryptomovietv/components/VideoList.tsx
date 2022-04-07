import { useState } from "react";
// const ModalVideo = require('react-modal-video')

const VideoList = ({ videos }: any) => {
  console.log("videos", videos);
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="mt-16">
      <h1 className="font-bold text-4xl my-2 text-primary ">More Videos</h1>
      <div className="mt-6 grid gap-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {videos.slice(0, 6).map((video: any) => {
          return(
            <iframe
            // width="960"
            // height="540"
            src={`https://www.youtube.com/embed/${video.key}`}
            title="Videos"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
            className="h-56 w-full sm:h-56 md:h-56 lg:h-56 border-solid border-2 border-primary rounded-md"
          />
          )
        })}
      </div>
    </div>
  );
};

export default VideoList;
