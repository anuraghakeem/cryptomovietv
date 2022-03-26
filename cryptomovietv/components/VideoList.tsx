import { useState } from 'react'
// const ModalVideo = require('react-modal-video')

const VideoList = ()=>{
    const [isOpen, setOpen] = useState(false)
    return(
        <div className="mt-16">
            <h1 className="font-bold text-4xl my-2 text-primary ">More Videos</h1>
            {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

			<button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button> */}
        </div>

    )
}

export default VideoList