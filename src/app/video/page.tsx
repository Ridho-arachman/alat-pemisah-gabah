import React from "react";

export default function VideoPanduan() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl md:text-2xl font-bold mb-2">
        Video Panduan Penggunaan Alat
      </h1>
      <div className="w-full aspect-video bg-gray-200 rounded overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video Panduan"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-gray-700">
        Tonton video ini untuk memahami cara kerja dan penggunaan alat pemisah
        gabah berisi dan gabah kosong berbasis blower mesin air.
      </p>
    </div>
  );
}
