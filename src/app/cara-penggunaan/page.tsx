import React from "react";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="space-y-6">
      <h1 className="text-xl md:text-2xl font-bold mb-2">
        Cara Penggunaan Alat
      </h1>
      <div className="space-y-4">
        {langkah.map((l, i) => (
          <Card key={i} className="bg-white">
            <CardContent className="p-4">
              <h2 className="font-semibold text-lg mb-1">{l.judul}</h2>
              <p>{l.isi}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="font-semibold text-lg mb-2">Tips Keselamatan</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Gunakan alat di tempat kering dan berventilasi baik.</li>
          <li>Jangan memasukkan tangan ke dalam alat saat blower menyala.</li>
          <li>Pastikan kabel listrik tidak terkelupas.</li>
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold text-lg mb-2">Hal yang Harus Dihindari</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Jangan mengoperasikan alat tanpa pengawasan.</li>
          <li>Hindari penggunaan alat saat hujan atau kondisi basah.</li>
          <li>Jangan memaksa alat jika terjadi macet.</li>
        </ul>
      </div>
    </div>
  );
}
