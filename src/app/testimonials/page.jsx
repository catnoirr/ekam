"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Home() {
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white flex flex-col items-center py-6 sm:py-8 md:py-10">
        <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white p-3 sm:p-4 text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-black">Photos</h2>
              <div className="w-24 sm:w-32 border-b-2 border-teal-500 mx-auto mt-1 mb-3 sm:mb-4"></div>
              <div className="relative w-full h-[20rem] sm:h-[25rem] md:h-[30rem]">
                <Image
                  src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid"
                  alt="Photos"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <button
                onClick={() => setPhotoModalOpen(true)}
                className="mt-3 sm:mt-4 bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-teal-600 text-sm sm:text-base hover:scale-105 transition"
              >
                Show More Photos
              </button>
            </div>

            <div className="bg-white p-3 sm:p-4 text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-black">Videos</h2>
              <div className="w-24 sm:w-32 border-b-2 border-teal-500 mx-auto mt-1 mb-3 sm:mb-4"></div>
              <div className="relative w-full h-[20rem] sm:h-[25rem] md:h-[30rem]">
                <Image
                  src="https://img.freepik.com/free-photo/co-working-people-working-together_23-2149328346.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid"
                  alt="Videos"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <button
                onClick={() => setVideoModalOpen(true)}
                className="mt-3 sm:mt-4 bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-teal-600 text-sm sm:text-base hover:scale-105 transition"
              >
                Show More Videos
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4 sm:py-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-black">LET&apos;S BE FRIENDS!</h2>
        <div className="flex justify-center gap-4 sm:gap-7 mb-4">
          {[
            {
              Icon: FaInstagram,
              color:
                "from-[#feda75] via-[#d62976] to-[#962fbf] bg-gradient-to-br ",
              link: "https://instagram.com",
            },
            {
              Icon: FaFacebookF,
              color: "from-blue-500 to-blue-700 bg-gradient-to-r",
              link: "https://facebook.com",
            },
            {
              Icon: FaLinkedinIn,
              color: "from-blue-700 to-blue-900 bg-gradient-to-r",
              link: "https://linkedin.com",
            },
            {
              Icon: FaYoutube,
              color: "from-red-500 to-red-700 bg-gradient-to-r",
              link: "https://youtube.com",
            },
          ].map(({ Icon, color, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white p-1.5 sm:p-2 rounded-xl ${color} hover:scale-110 transition`}
            >
              <Icon size={24} className="sm:w-[30px] sm:h-[30px]" />
            </a>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-2 sm:py-3 text-center mt-2 sm:mt-3">
        <p className="text-gray-800 text-sm sm:text-md">
          Copyright 2024 ©{" "}
          <a href="https://ekam.com" className="hover:underline">
            ekam.com
          </a>{" "}
          Made with <span className="text-red-500">❤️</span> in India
        </p>
      </div>

      {photoModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xs z-50 p-4"
          onClick={() => setPhotoModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-3xl p-4 sm:p-6 shadow-lg relative rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 text-center text-black">Photos</h2>
            <div className="max-h-[60vh] sm:max-h-[65vh] overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 p-2 scrollbar-[3px] scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              {[
                "https://wemeestore.com/wp-content/uploads/2024/07/1-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/3-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/1-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/3-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/1-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/3-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/1-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/3-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/1-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/3-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/1-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/3-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/1-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/3-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/1-3-1024x1024.webp",
                "https://wemeestore.com/wp-content/uploads/2024/07/3-3-1024x1024.webp",
              ].map((src, index) => (
                <div key={index} className="relative h-28 sm:h-32 md:h-36 w-full overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt={`Photo ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => setPhotoModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {videoModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-3xl p-4 sm:p-6 shadow-lg relative rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 text-center text-black">Video</h2>

            <div className="relative w-full h-48 sm:h-64 md:h-96">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/QkbPPAnC5dg"
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
