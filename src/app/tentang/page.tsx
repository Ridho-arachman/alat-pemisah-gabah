import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Mail,
  Phone,
  User,
  CalendarCheck,
  MessageCircle,
} from "lucide-react";

const tim = [
  { nama: "Andi", peran: "Ketua Tim", foto: null },
  { nama: "Budi", peran: "Teknisi", foto: null },
  { nama: "Citra", peran: "Desain & Dokumentasi", foto: null },
];

const riwayat = [
  { tahun: "2024", event: "Riset & desain awal alat" },
  { tahun: "2025", event: "Pembuatan & uji coba lapangan" },
  { tahun: "2025", event: "Implementasi di KKM 71" },
];

const testimoni = [
  {
    nama: "Pak Darto",
    isi: "Alat ini sangat membantu saat panen, hasilnya lebih cepat dan bersih.",
  },
  { nama: "Bu Siti", isi: "Pengoperasian mudah, cocok untuk petani kecil." },
];

export default function Tentang() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center min-h-[60vh] py-8 px-2">
      {/* Info Alat & Tim Section */}
      <Card className="w-full max-w-xl shadow-xl border-0">
        <CardContent className="flex flex-col gap-6 py-8">
          <div className="flex items-center gap-2 justify-center">
            <Users className="w-7 h-7 text-blue-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2 text-center">
              Tentang Alat & Tim
            </h1>
          </div>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Nama Alat:</span> Alat Pemisah
              Gabah Berisi dan Gabah Kosong Berbasis Blower Mesin Air
            </p>
            <p>
              <span className="font-semibold">Dibuat oleh:</span> Divisi TTG dan
              TI – KKM 71 Universitas Bina Bangsa
            </p>
            <p>
              <span className="font-semibold">Tahun:</span> 2025
            </p>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" /> Kontak
            </h2>
            <ul className="text-gray-700 space-y-1">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a
                  href="mailto:ttg.kkm71@email.com"
                  className="underline text-blue-700"
                >
                  ttg.kkm71@email.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a
                  href="https://wa.me/6281234567890"
                  className="underline text-blue-700"
                >
                  0812-3456-7890
                </a>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
      {/* Profil Tim Section */}
      <section className="w-full max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          <User className="w-6 h-6 text-blue-500" />
          Profil Tim
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {tim.map((t, i) => (
            <Card key={i} className="flex flex-col items-center gap-2 p-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-2xl">
                {t.nama[0]}
              </div>
              <h3 className="font-semibold text-lg text-center">{t.nama}</h3>
              <p className="text-gray-600 text-center text-sm">{t.peran}</p>
            </Card>
          ))}
        </div>
      </section>
      {/* Riwayat Pengembangan Section */}
      <section className="w-full max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          <CalendarCheck className="w-6 h-6 text-blue-500" />
          Riwayat Pengembangan
        </h2>
        <div className="flex flex-col gap-3">
          {riwayat.map((r, i) => (
            <Card key={i} className="flex flex-row items-center gap-3 p-4">
              <CalendarCheck className="w-5 h-5 text-blue-400" />
              <CardContent className="p-0">
                <span className="font-semibold text-blue-700 mr-2">
                  {r.tahun}
                </span>
                {r.event}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Testimoni Section */}
      <section className="w-full max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-blue-500" />
          Testimoni Pengguna
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {testimoni.map((t, i) => (
            <Card key={i} className="flex flex-col gap-2 p-4">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-blue-700">{t.nama}</span>
              </div>
              <p className="text-gray-700 italic">"{t.isi}"</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
