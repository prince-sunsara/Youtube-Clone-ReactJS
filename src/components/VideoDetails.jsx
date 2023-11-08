import React, { useState, useEffect, useContext } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVedioCard";

const VedioDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    });
  };

  const fetchRelatedVideo = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    });
  };

  return (
    <div className="flex justify-center h-[calc(100%-56px)] bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        {/* main video div  */}
        <div className="flex flex-col lg:w-[cals(100%-350px)] xl:w-[cals(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          {/* video div */}
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
            />
          </div>

          {/* video title div  */}
          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>

          {/*channel div  */}
          <div className="flex justify-between md:flex-row mt-4">
            <div className="flex">
              {/* channel image  */}
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                    alt="channel image"
                  />
                </div>
              </div>

              {/* channel detials  */}
              <div className="flex flex-col ml-3">
                <div className="text-white text-md font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" &&
                    <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1' />
                  }
                </div>

                <div className="text-white/[0.7] text-sm">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            {/* views and likes div  */}
            <div className="flex mt-4 text-white md:mt-0">
                  {/* likes  */}
                  <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                    <AiOutlineLike className="text-xl text-white mr-2"/>
                    <span>
                      {`${abbreviateNumber(video?.stats?.likes, 2)} likes`}
                    </span>
                  </div>
                  {/* views  */}
                  <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                    <AiOutlineLike className="text-xl text-white mr-2"/>
                    <span>
                      {`${abbreviateNumber(video?.stats?.views, 2)} views`}
                    </span>
                  </div>
            </div>
          </div>

        </div>

        
      </div>
    </div>
  );
};

export default VedioDetails;
