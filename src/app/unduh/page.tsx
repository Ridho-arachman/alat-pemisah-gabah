import React from "react";
import { Button } from "@/components/ui/button";

export default function UnduhModul() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl md:text-2xl font-bold mb-2">
        Unduh Modul & Gambar Kerja
      </h1>
      <p className="text-gray-700">
        Modul ini berisi petunjuk lengkap penggunaan, perawatan, dan
        troubleshooting alat pemisah gabah berbasis blower mesin air.
      </p>
      <Button asChild className="w-full max-w-xs">
        <a href="/modul-ttg.pdf" download>
          Download Modul PDF
        </a>
      </Button>
      <div>
        <h2 className="font-semibold text-lg mb-2">Gambar Kerja / Foto Alat</h2>
        <a
          href="/file.svg"
          target="_blank"
          rel="noopener"
          className="underline text-blue-700"
        >
          Lihat Gambar Kerja (placeholder)
        </a>
      </div>
    </div>
  );
}
