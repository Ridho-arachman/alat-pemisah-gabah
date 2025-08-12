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
            <div className="text-gray-700 text-sm md:text-base leading-relaxed">
              <div className="text-center font-bold text-lg mb-6">
                DAFTAR ISI
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span>KATA PENGANTAR</span>
                  <span className="text-blue-600 font-medium">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>DAFTAR GAMBAR</span>
                  <span className="text-blue-600 font-medium">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>DAFTAR TABLE</span>
                  <span className="text-blue-600 font-medium">7</span>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <div className="flex justify-between items-center font-semibold text-blue-800">
                  <span>BAB I PENDAHULUAN</span>
                  <span>8</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>1.1 Latar Belakang</span>
                  <span className="text-blue-600 font-medium">8</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>1.2 Rumusan Masalah</span>
                  <span className="text-blue-600 font-medium">9</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>1.3 Tujuan Kegiatan</span>
                  <span className="text-blue-600 font-medium">9</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>1.4 Manfaat Kegiatan</span>
                  <span className="text-blue-600 font-medium">10</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>1.5 Metodologi Pelaksanaan</span>
                  <span className="text-blue-600 font-medium">11</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>1.6 Waktu dan Lokasi Pelaksanaan</span>
                  <span className="text-blue-600 font-medium">12</span>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <div className="flex justify-between items-center font-semibold text-blue-800">
                  <span>BAB II LANDASAN TEORI DAN STUDI TERDAHULU</span>
                  <span>13</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>2.1 Teknologi Tepat Guna (TTG) dalam Pertanian</span>
                  <span className="text-blue-600 font-medium">13</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>
                    2.2 Prinsip Pemisahan Gabah berdasarkan Berat Jenis
                  </span>
                  <span className="text-blue-600 font-medium">14</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>2.3 Studi Alat Sejenis dan Komponen Utama</span>
                  <span className="text-blue-600 font-medium">15</span>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <div className="flex justify-between items-center font-semibold text-blue-800">
                  <span>BAB III DESAIN DAN SPESIFIKASI ALAT</span>
                  <span>17</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>3.1 Desain Alat</span>
                  <span className="text-blue-600 font-medium">17</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>3.2 Deskripsi Komponen</span>
                  <span className="text-blue-600 font-medium">18</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>3.2.1. Kayu Kaso (400 x 4 x 6 cm)</span>
                  <span className="text-blue-600 font-medium">19</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>3.2.2. Kayu Papan (12 x 3 cm)</span>
                  <span className="text-blue-600 font-medium">19</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>3.2.3. Seng Talang</span>
                  <span className="text-blue-600 font-medium">20</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>3.2.4. Kayu List</span>
                  <span className="text-blue-600 font-medium">20</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>3.2.5. Motor Pompa Air</span>
                  <span className="text-blue-600 font-medium">21</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>3.2.6. Dimmer SCR 2000 Watt</span>
                  <span className="text-blue-600 font-medium">21</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>3.2.7. Baling - Baling Kipas (16 Inch)</span>
                  <span className="text-blue-600 font-medium">22</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>3.2.8. Paku (10, 7, 4, 5 & GRC)</span>
                  <span className="text-blue-600 font-medium">22</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>3.2.9. Connector Ring 12 mm</span>
                  <span className="text-blue-600 font-medium">23</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>
                    3.3 Prinsip Kerja Berdasarkan Massa Jenis dan Aliran Udara
                  </span>
                  <span className="text-blue-600 font-medium">23</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>3.4 Estimasi Biaya Pembuatan</span>
                  <span className="text-blue-600 font-medium">25</span>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <div className="flex justify-between items-center font-semibold text-blue-800">
                  <span>BAB IV PEMBUATAN DAN PERAKITAN ALAT</span>
                  <span>27</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>4.1 Alat dan Bahan</span>
                  <span className="text-blue-600 font-medium">27</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>4.1.1. Komponen dan Bahan Utama</span>
                  <span className="text-blue-600 font-medium">27</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>4.1.2. Alat Penunjang yang Digunakan</span>
                  <span className="text-blue-600 font-medium">28</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>4.2 Prosedur Pembuatan dan Perakitan</span>
                  <span className="text-blue-600 font-medium">29</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>4.2.1 Rangkaian perakitan alat dengan dimmer</span>
                  <span className="text-blue-600 font-medium">29</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>4.2.2 Pembuatan Alat</span>
                  <span className="text-blue-600 font-medium">30</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>4.3 Pengujian Alat (Input dan Output Gabah)</span>
                  <span className="text-blue-600 font-medium">34</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>4.3.1 Tujuan Pengujian</span>
                  <span className="text-blue-600 font-medium">35</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>4.3.2 Bahan Uji</span>
                  <span className="text-blue-600 font-medium">35</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>4.3.3 Prosedur Pengujian</span>
                  <span className="text-blue-600 font-medium">35</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>4.3.4 Hasil Pengujian</span>
                  <span className="text-blue-600 font-medium">36</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>4.3.5 Kesimpulan Pengujian</span>
                  <span className="text-blue-600 font-medium">37</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>4.4 Keselamatan dalam Desain dan Konstruksi Alat</span>
                  <span className="text-blue-600 font-medium">37</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>4.4.1 Keselamatan dalam Desain Alat</span>
                  <span className="text-blue-600 font-medium">37</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>4.4.2 Keselamatan dalam Proses Konstruksi</span>
                  <span className="text-blue-600 font-medium">38</span>
                </div>
                <div className="flex justify-between items-center ml-8">
                  <span>4.4.3 Pencegahan Risiko Penggunaan</span>
                  <span className="text-blue-600 font-medium">38</span>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <div className="flex justify-between items-center font-semibold text-blue-800">
                  <span>BAB V PENUTUP</span>
                  <span>39</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>5.1 Kesimpulan</span>
                  <span className="text-blue-600 font-medium">39</span>
                </div>
                <div className="flex justify-between items-center ml-4">
                  <span>5.2 Saran dan Pengembangan ke Depan</span>
                  <span className="text-blue-600 font-medium">39</span>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <div className="flex justify-between items-center">
                  <span>DAFTAR PUSTAKA</span>
                  <span className="text-blue-600 font-medium">42</span>
                </div>
              </div>
            </div>
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
