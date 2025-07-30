import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Image as ImageIcon } from "lucide-react";
import data from "@/lib/unduh.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

export default function UnduhModul() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center min-h-[60vh] py-8 px-2">
      {/* Download Section */}
      <Card className="w-full max-w-xl shadow-xl border-0">
        <CardContent className="flex flex-col gap-6 py-8">
          <div className="flex items-center gap-2 justify-center">
            <Download className="w-7 h-7 text-blue-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2 text-center">
              {data.title}
            </h1>
          </div>
          <p className="text-gray-700 text-center">{data.description}</p>
          <Button
            asChild
            size="lg"
            className="w-full max-w-xs mx-auto flex gap-2 items-center"
          >
            <a href={data.download.filePath} download>
              <Download className="w-5 h-5 mr-2" /> {data.download.buttonText}
            </a>
          </Button>
          <Card className="w-full mt-4 bg-gray-50 border-dashed border-2 border-blue-100">
            <CardContent className="flex flex-col items-center gap-2 py-4">
              <ImageIcon className="w-7 h-7 text-blue-400" />
              <a
                href={data.gambarKerja.filePath}
                target="_blank"
                rel="noopener"
                className="underline text-blue-700 font-medium"
              >
                {data.gambarKerja.title}
              </a>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      {/* Preview Modul Section */}
      <section className="w-full max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          📑 DAFTAR ISI
        </h2>
        <Card className="bg-gray-50">
          <CardContent className="py-4">
            <pre className="whitespace-pre-wrap text-gray-700 text-sm md:text-base font-mono leading-relaxed">
              {`
KATA PENGANTAR................................................................. i
DAFTAR ISI.................................................................... ii
DAFTAR GAMBAR................................................................. iii
DAFTAR TABEL.................................................................. iv

BAB I – PENDAHULUAN........................................................... 1
  1.1 Latar Belakang
  1.2 Rumusan Masalah
  1.3 Tujuan Kegiatan
  1.4 Manfaat Kegiatan
  1.5 Waktu dan Lokasi Pelaksanaan

BAB II – LANDASAN TEORI DAN STUDI TERDAHULU.................... 6
  2.1 Teknologi Tepat Guna (TTG) dalam Pertanian
  2.2 Prinsip Pemisahan Gabah berdasarkan Berat Jenis
  2.3 Studi Alat Sejenis dan Komponen Utama

BAB III – DESAIN DAN SPESIFIKASI ALAT............................. 10
  3.1 Gambar Rancangan Umum
  3.2 Deskripsi Komponen:
      – Kerangka Kayu
      – Blower Mesin Air
      – Saluran Masuk dan Keluaran Gabah
      – Potensiometer
  3.3 Prinsip Kerja Berdasarkan Massa Jenis dan Aliran Udara
  3.4 Estimasi Biaya Pembuatan

BAB IV – PEMBUATAN DAN PERAKITAN ALAT.......................... 17
  4.1 Alat dan Bahan
  4.2 Prosedur Pembuatan dan Perakitan
  4.3 Penyesuaian dan Kalibrasi
  4.4 Keselamatan Kerja

BAB V – PENUTUP......................................................... 24
  5.1 Kesimpulan
  5.2 Saran dan Pengembangan ke Depan

DAFTAR PUSTAKA............................................................... 26
`}
            </pre>
          </CardContent>
        </Card>
      </section>
      {/* Petunjuk Download Section */}
      <section className="w-full max-w-xl mx-auto">
        <Card className="flex flex-row items-center gap-3 p-4 mt-4 bg-blue-50 border-blue-200">
          <Download className="w-6 h-6 text-blue-500" />
          <CardContent className="p-0">
            <h2 className="font-semibold text-lg mb-1">
              {data.petunjuk.title}
            </h2>
            <p className="text-gray-700 text-sm">{data.petunjuk.description}</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
