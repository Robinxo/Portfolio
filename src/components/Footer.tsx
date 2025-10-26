import React, { useEffect, useState } from "react";
import FetchLastFM from "../utils/LastFM";

interface LastFMResponse {
  recenttracks: {
    track: LastFMTrack[];
  };
}

interface LastFMAttr {
  nowplaying?: string;
}

interface LastFMArtist {
  "#text": string;
}

interface LastFMTrack {
  name: string;
  artist: LastFMArtist;
  "@attr"?: LastFMAttr;
}

export const Footer = (): React.JSX.Element => {
  const [status, setStatus] = useState("Loading...");

  const nowPlaying = async () => {
    try {
      const data: LastFMResponse | null = await FetchLastFM();
      const recentTracks = data.recenttracks.track[0];

      if (recentTracks?.["@attr"]?.nowplaying) {
        setStatus("online");
      } else {
        setStatus("offline");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error fetching data");
    }
  };
  useEffect(() => {
    nowPlaying();
    const interval = setInterval(nowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-[#09090B] h-25 fixed bottom-0 right-0 left-0 px-4 sm:h-20 sm:px-6 md:px-10 lg:px-15 xl:px-60">
        <nav className="flex flex-col justify-center items-center font-mono text-[14px] py-3 space-x-1 sm:text-1xl sm:flex sm:flex-row sm:space-x-9 md:space-x-14 lg:space-x-30 xl:space-x-25 ">
          <p className="text-amber-50 font-mono">📍 Based in India</p>
          <p className="text-amber-50 font-mono">
            © 2025 Om Rawat — Designed & Built by Me
          </p>
          <span className="flex flex-row gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 50 50"
            >
              <path
                fill="#8bc34a"
                d="M24.001,4c-11.077,0-20,8.923-20,20s8.923,20,20,20c11.076,0,20-8.923,20-20S35.077,4,24.001,4z"
              ></path>
              <path
                fill="#fff"
                d="M31.747,33.915c-0.292,0-0.585-0.145-0.877-0.292c-2.777-1.607-6.139-2.484-9.792-2.484c-2.047,0-4.093,0.291-5.993,0.73c-0.292,0-0.731,0.146-0.877,0.146c-0.731,0-1.169-0.586-1.169-1.17c0-0.73,0.438-1.17,1.023-1.314c2.338-0.586,4.677-0.877,7.161-0.877c4.093,0,7.893,1.021,11.108,2.924c0.438,0.291,0.731,0.584,0.731,1.314C32.916,33.478,32.331,33.915,31.747,33.915z M33.793,28.945c-0.438,0-0.73-0.144-1.023-0.291c-3.068-1.9-7.308-3.071-12.13-3.071c-2.339,0-4.531,0.293-6.139,0.733c-0.439,0.144-0.585,0.144-0.877,0.144c-0.877,0-1.462-0.73-1.462-1.461c0-0.877,0.439-1.316,1.169-1.607c2.192-0.584,4.385-1.023,7.454-1.023c4.97,0,9.793,1.17,13.593,3.507c0.584,0.291,0.877,0.877,0.877,1.461C35.255,28.215,34.67,28.945,33.793,28.945z M36.132,23.101c-0.438,0-0.585-0.146-1.023-0.291c-3.508-2.047-8.769-3.217-13.885-3.217c-2.631,0-5.262,0.293-7.6,0.877c-0.293,0-0.585,0.146-1.023,0.146c-1.023,0.146-1.754-0.73-1.754-1.754c0-1.023,0.585-1.607,1.315-1.754c2.777-0.877,5.7-1.17,9.062-1.17c5.554,0,11.4,1.17,15.785,3.654c0.584,0.293,1.022,0.877,1.022,1.754C37.886,22.369,37.154,23.101,36.132,23.101z"
              ></path>
            </svg>
            <p className="font-mono">
              Om is currently <span className="text-amber-200"> {status} </span>
            </p>
          </span>
        </nav>
      </div>
    </>
  );
};
