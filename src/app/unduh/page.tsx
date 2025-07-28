import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Image as ImageIcon, BookOpen } from "lucide-react";

const daftarIsi = [
  "Pendahuluan",
  "Spesifikasi Alat",
  "Langkah Penggunaan",
  "Perawatan & Troubleshooting",
  "Kontak Bantuan",
];

export default function UnduhModul() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center min-h-[60vh] py-8 px-2">
      {/* Download Section */}
      <Card className="w-full max-w-xl shadow-xl border-0">
        <CardContent className="flex flex-col gap-6 py-8">
          <div className="flex items-center gap-2 justify-center">
            <Download className="w-7 h-7 text-blue-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2 text-center">
              Unduh Modul & Gambar Kerja
            </h1>
          </div>
          <p className="text-gray-700 text-center">
            Modul ini berisi petunjuk lengkap penggunaan, perawatan, dan
            troubleshooting alat pemisah gabah berbasis blower mesin air.
          </p>
          <Button
            asChild
            size="lg"
            className="w-full max-w-xs mx-auto flex gap-2 items-center"
          >
            <a href="/modul-ttg.pdf" download>
              <Download className="w-5 h-5 mr-2" /> Download Modul PDF
            </a>
          </Button>
          <Card className="w-full mt-4 bg-gray-50 border-dashed border-2 border-blue-100">
            <CardContent className="flex flex-col items-center gap-2 py-4">
              <ImageIcon className="w-7 h-7 text-blue-400" />
              <a
                href="/file.svg"
                target="_blank"
                rel="noopener"
                className="underline text-blue-700 font-medium"
              >
                Lihat Gambar Kerja (placeholder)
              </a>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      {/* Preview Modul Section */}
      <section className="w-full max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-500" />
          Preview Daftar Isi Modul
        </h2>
        <Card className="bg-gray-50">
          <CardContent className="py-4">
            <ul className="list-decimal ml-8 text-gray-700 space-y-1">
              {daftarIsi.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
      {/* Petunjuk Download Section */}
      <section className="w-full max-w-xl mx-auto">
        <Card className="flex flex-row items-center gap-3 p-4 mt-4 bg-blue-50 border-blue-200">
          <Download className="w-6 h-6 text-blue-500" />
          <CardContent className="p-0">
            <h2 className="font-semibold text-lg mb-1">Petunjuk Download</h2>
            <p className="text-gray-700 text-sm">
              Jika file tidak terunduh otomatis, klik kanan lalu pilih
              &quot;Save link as...&quot;
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
