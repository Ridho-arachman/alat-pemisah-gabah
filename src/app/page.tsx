"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  ShieldCheck,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import data from "@/lib/home.json";
import { useState } from "react";

// Data gambar carousel
const carouselImages = [
  {
    src: "/file.svg",
    alt: "Gambar Alat 1",
    title: "Tampak Depan Alat",
  },
  {
    src: "/globe.svg",
    alt: "Gambar Alat 2",
    title: "Tampak Samping Alat",
  },
  {
    src: "/window.svg",
    alt: "Gambar Alat 3",
    title: "Detail Komponen Alat",
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-12 items-center justify-center min-h-[70vh] py-8 px-2">
      {/* Hero Section */}
      <Card className="w-full max-w-xl shadow-xl border-0">
        <CardContent className="flex flex-col items-center gap-6 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 text-center">
            {data.hero.title}
          </h1>
          <p className="text-gray-600 text-lg text-center max-w-lg">
            {data.hero.description}
          </p>

          {/* Carousel Section */}
          <div
            className="relative w-64 h-40 md:w-80 md:h-52 rounded-lg overflow-hidden border-2 border-blue-100 bg-gray-100 shadow cursor-pointer hover:scale-105 transition-transform"
            onClick={openModal}
          >
            {/* Carousel Images */}
            <div className="relative w-full h-full">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow-md transition-all"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow-md transition-all"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>

            {/* Image Title */}
            <div className="absolute bottom-2 left-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded text-center">
              {carouselImages[currentImage].title}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex gap-2 mt-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="mt-2 w-full max-w-xs flex gap-2 items-center"
          >
            <Link href="/cara-penggunaan">
              {data.hero.buttonText} <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {data.links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-blue-700 hover:underline font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Modal Pop Up */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Modal Carousel */}
            <div className="relative w-full h-96 md:h-[500px]">
              {/* Carousel Images */}
              <div className="relative w-full h-full">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Image Title */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white text-sm px-3 py-2 rounded text-center">
                {carouselImages[currentImage].title}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex gap-3 justify-center py-4">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage
                      ? "bg-blue-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fitur Section */}
      <section className="w-full max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          Fitur Utama Alat
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {data.fitur.map((f, i) => (
            <Card key={i} className="flex flex-col items-center gap-2 p-4">
              {f.title === "Hemat Energi" && (
                <Zap className="w-6 h-6 text-blue-500" />
              )}
              {f.title === "Aman & Mudah" && (
                <ShieldCheck className="w-6 h-6 text-blue-500" />
              )}
              {f.title === "Akurasi Tinggi" && (
                <CheckCircle className="w-6 h-6 text-blue-500" />
              )}
              <h3 className="font-semibold text-lg text-center">{f.title}</h3>
              <p className="text-gray-600 text-center text-sm">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          FAQ
        </h2>
        <Accordion type="single" collapsible>
          {data.faq.map((item, i) => (
            <AccordionItem value={`faq-${i}`} key={i}>
              <AccordionTrigger className="text-base font-medium flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-400" />
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
