import React, { useEffect, useRef } from 'react';

const VideoPlay = ({ videoSrc, subtitleSrc, posterSrc, buttonText, headingText, descriptionText }) => {
  const videoRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tracks = videoRef.current.textTracks; // Accessing the text tracks
    const button = buttonRef.current;

    const handleCueChange = (event) => {
      const cues = event.target.activeCues;
      button.classList.remove('animate');

      for (const cue of cues) {
        const text = cue.text.toLowerCase();
        if (text.includes("subscri")) {
          button.classList.add('animate');
        }
      }
    };

    for (const track of tracks) {
      track.addEventListener("cuechange", handleCueChange);
    }

    return () => {
      for (const track of tracks) {
        track.removeEventListener("cuechange", handleCueChange);
      }
    };
  }, []);

  return (
    <div className="p-8 text-center">
      {/* Custom Button Text Section */}
      <button
        ref={buttonRef}
        className="border border-gray-500 rounded-full p-3 inline-block mt-4"
      >
        {buttonText}
      </button>

      {/* Main Heading */}
      <h1 className="text-4xl mt-4 font-bold">{headingText}</h1>
      {/* Description Text */}
      <p className="mt-4 text-center mx-auto text-lg  break-words">
  {descriptionText}
</p>


      {/* Video Section */}
      <video
        ref={videoRef}
        controls
        preload="metadata"
        poster={posterSrc}
        className="w-full max-w-2xl mx-auto rounded-lg mt-10"
      >
        <source src={videoSrc} type="video/mp4" />
        <track label="English" kind="subtitles" srclang="en" src={subtitleSrc} default />
      </video>
    </div>
  );
};

export default VideoPlay;
