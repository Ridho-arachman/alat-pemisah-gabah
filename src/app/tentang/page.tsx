import React from "react";

export default function Tentang() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl md:text-2xl font-bold mb-2">Tentang Alat & Tim</h1>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Nama Alat:</span> Alat Pemisah Gabah
          Berisi dan Gabah Kosong Berbasis Blower Mesin Air
        </p>
        <p>
          <span className="font-semibold">Dibuat oleh:</span> Divisi TTG dan TI
          – KKM 71 Universitas Bina Bangsa
        </p>
        <p>
          <span className="font-semibold">Tahun:</span> 2025
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-lg mb-2">Kontak</h2>
        <ul className="text-gray-700">
          <li>
            Email:{" "}
            <a
              href="mailto:ttg.kkm71@email.com"
              className="underline text-blue-700"
            >
              ttg.kkm71@email.com
            </a>
          </li>
          <li>
            WhatsApp:{" "}
            <a
              href="https://wa.me/6281234567890"
              className="underline text-blue-700"
            >
              0812-3456-7890
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
