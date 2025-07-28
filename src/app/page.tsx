import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <h1 className="text-2xl md:text-3xl font-bold mt-4">
        Alat Pemisah Gabah Berisi dan Gabah Kosong Berbasis Blower Mesin Air
      </h1>
      <div className="w-full flex justify-center">
        <div className="relative w-64 h-40 md:w-80 md:h-52 rounded-lg overflow-hidden border bg-gray-100">
          <Image
            src="/file.svg"
            alt="Gambar Alat (placeholder)"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <p className="max-w-xl text-gray-700">
        Alat ini dirancang untuk memisahkan gabah berisi dan gabah kosong secara
        efisien menggunakan blower mesin air. Solusi tepat guna untuk
        meningkatkan hasil panen dan efisiensi kerja petani.
      </p>
      <Card className="w-full max-w-xs mx-auto">
        <CardContent className="flex flex-col gap-2 py-4">
          <Button asChild className="w-full">
            <Link href="/cara-penggunaan">Lihat Panduan Penggunaan</Link>
          </Button>
          <div className="flex justify-center gap-2 mt-2">
            <Link href="/perawatan" className="underline text-blue-700">
              Perawatan
            </Link>
            <Link href="/video" className="underline text-blue-700">
              Video
            </Link>
            <Link href="/unduh" className="underline text-blue-700">
              Unduh Modul
            </Link>
            <Link href="/tentang" className="underline text-blue-700">
              Tentang
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
