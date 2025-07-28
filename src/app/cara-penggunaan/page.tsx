import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

const langkah = [
  {
    judul: "1. Persiapan Alat",
    isi: "Pastikan alat terpasang dengan benar dan blower mesin air dalam kondisi baik.",
  },
  {
    judul: "2. Pengisian Gabah",
    isi: "Masukkan gabah ke dalam hopper/pengumpan secara perlahan.",
  },
  {
    judul: "3. Pengoperasian",
    isi: "Nyalakan blower dan atur kecepatan sesuai kebutuhan. Gabah akan terpisah otomatis.",
  },
  {
    judul: "4. Pengambilan Hasil",
    isi: "Ambil gabah berisi dan gabah kosong dari wadah output yang berbeda.",
  },
];

export default function CaraPenggunaan() {
  return (
    <div className="flex flex-col gap-12 py-4">
      {/* Langkah Section */}
      <section>
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">
          Cara Penggunaan Alat
        </h1>
        <div className="grid gap-4 md:grid-cols-2">
          {langkah.map((l, i) => (
            <Card key={i} className="flex flex-row items-start gap-4 p-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 text-lg">
                {i + 1}
              </div>
              <CardContent className="p-0">
                <h2 className="font-semibold text-lg mb-1">{l.judul}</h2>
                <p className="text-gray-700">{l.isi}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Ilustrasi Section */}
      <section className="w-full max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          Ilustrasi / Skema Alat
        </h2>
        <Card className="flex flex-col items-center p-6">
          <div className="relative w-64 h-40 md:w-96 md:h-56 rounded-lg overflow-hidden border-2 border-blue-100 bg-gray-100 mb-4">
            <Image
              src="/file.svg"
              alt="Ilustrasi Alat (placeholder)"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-600 text-center">
            Gambar kerja atau diagram alur alat. Ganti dengan ilustrasi asli
            jika tersedia.
          </p>
        </Card>
      </section>
    </div>
  );
}
