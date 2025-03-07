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
      <div className="bg-white flex flex-col items-center py-10">
        <div className="max-w-6xl w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 text-center">
              <h2 className="text-2xl font-semibold text-black">Photos</h2>
              <div className="w-32 border-b-2 border-teal-500 mx-auto mt-1 mb-4"></div>
              <div className="relative w-full h-[30rem]">
                <Image
                  src="https://wemeestore.com/wp-content/uploads/2024/07/1-3-1024x1024.webp"
                  alt="Photos"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <button
                onClick={() => setPhotoModalOpen(true)}
                className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
              >
                Show More Photos
              </button>
            </div>

            <div className="bg-white p-4 text-center">
              <h2 className="text-2xl font-semibold text-black">Videos</h2>
              <div className="w-32 border-b-2 border-teal-500 mx-auto mt-1 mb-4"></div>
              <div className="relative w-full h-[30rem]">
                <Image
                  src="https://wemeestore.com/wp-content/uploads/2024/07/3-3-1024x1024.webp"
                  alt="Videos"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <button
                onClick={() => setVideoModalOpen(true)}
                className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
              >
                Show More Videos
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-6 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-black">LET&apos;S BE FRIENDS!</h2>
        <div className="flex justify-center gap-7 mb-4">
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
              className={`text-white p-2 rounded-xl ${color} hover:scale-110 transition`}
            >
              <Icon size={30} />
            </a>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-2 text-center mt-3">
        <p className="text-gray-800 text-md">
          Copyright 2024 ©{" "}
          <a href="https://ekam.com" className="hover:underline">
            ekam.com
          </a>{" "}
          Made with <span className="text-red-500">❤️</span> in India
        </p>
      </div>

      {photoModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xs z-50"
          onClick={() => setPhotoModalOpen(false)} // Close when clicking outside
        >
          <div
            className="bg-white max-w-3xl w-full p-6 shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-4xl font-semibold mb-4 text-center text-black">Photos</h2>
            <div className="max-h-[65vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-2 scrollbar-[3px] scrollbar-thumb-gray-400 scrollbar-track-gray-100">
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
                <div key={index} className="relative h-36 w-40 overflow-hidden">
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
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="bg-white max-w-3xl w-full p-6 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-4xl font-semibold mb-4 text-center text-black">Video</h2>

            <div className="relative w-full h-64 sm:h-80 md:h-96">
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
