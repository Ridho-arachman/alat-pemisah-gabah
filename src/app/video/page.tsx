import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, ListChecks } from "lucide-react";
import data from "@/lib/video.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: data.title,
  description: data.video?.description || "Video panduan alat pemisah gabah.",
};

export default function VideoPanduan() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center min-h-[60vh] py-8 px-2">
      {/* Video Section */}
      <Card className="w-full max-w-xl shadow-xl border-0">
        <CardContent className="flex flex-col gap-6 py-8">
          <div className="flex items-center gap-2 justify-center">
            <PlayCircle className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2 text-center">
              {data.title}
            </h1>
          </div>
          <div className="w-full aspect-video bg-gray-200 rounded overflow-hidden">
            <iframe
              className="w-full h-full"
              src={data.video.src}
              title={data.video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-gray-700 text-center">{data.video.description}</p>
        </CardContent>
      </Card>
      {/* Poin Penting Section */}
      <section className="w-full max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          <ListChecks className="w-6 h-6 text-blue-500" />
          {data.poinPenting.title}
        </h2>
        <ul className="list-disc ml-8 text-gray-700 space-y-2">
          {data.poinPenting.items.map((p: string, i: number) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
