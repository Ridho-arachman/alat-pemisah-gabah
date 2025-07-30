"use client";
import data from "@/lib/tentang.json";

import Image from "next/image";
import { useState } from "react";
import {
  Users,
  Mail,
  Phone,
  User,
  CalendarCheck,
  MessageCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

type TimMember = {
  nama: string;
  peran: string;
  foto?: string | null;
  deskripsi?: string;
};

export default function Tentang() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<TimMember | null>(null);

  const handleOpen = (t: TimMember) => {
    setSelected(t);
    setOpen(true);
  };

  return (
    <div className="flex flex-col gap-12 items-center justify-center min-h-[60vh] py-8 px-2">
      {/* Info Alat & Tim Section */}
      <Card className="w-full max-w-xl shadow-xl border-0">
        <CardContent className="flex flex-col gap-6 py-8">
          <div className="flex items-center gap-2 justify-center">
            <Users className="w-7 h-7 text-blue-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2 text-center">
              {data.title}
            </h1>
          </div>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Nama Alat:</span>{" "}
              {data.infoAlat.namaAlat}
            </p>
            <p>
              <span className="font-semibold">Dibuat oleh:</span>{" "}
              {data.infoAlat.dibuatOleh}
            </p>
            <p>
              <span className="font-semibold">Tahun:</span>{" "}
              {data.infoAlat.tahun}
            </p>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" /> {data.kontak.title}
            </h2>
            <ul className="text-gray-700 space-y-1">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a
                  href={data.kontak.email.link}
                  className="underline text-blue-700"
                >
                  {data.kontak.email.address}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a
                  href={data.kontak.phone.link}
                  className="underline text-blue-700"
                >
                  {data.kontak.phone.number}
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
          {data.tim.map((t: TimMember, i: number) => (
            <Card
              key={i}
              className="flex flex-col items-center gap-2 p-4 cursor-pointer transition-transform duration-200 hover:scale-105"
              onClick={() => handleOpen(t)}
            >
              <Image
                src={t.foto || "/tim/avatar.png"}
                alt={t.nama}
                width={100}
                height={100}
                className="rounded-full"
              />
              <h3 className="font-semibold text-lg text-center">{t.nama}</h3>
              <p className="text-gray-600 text-center text-sm">{t.peran}</p>
            </Card>
          ))}
        </div>
        {/* Modal Preview Tim (Dialog di tengah) */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-sm w-full p-0 overflow-hidden">
            {selected && (
              <div className="flex flex-col items-center">
                {/* Header Foto Besar */}
                <div className="w-full h-96 bg-gray-100 relative">
                  <Image
                    src={selected.foto || "/tim/avatar.png"}
                    alt={selected.nama}
                    fill
                    className="object-cover object-top w-full h-full rounded-t-xl border-b"
                    priority
                  />
                </div>
                <div className="w-full px-6 pb-6 pt-4 flex flex-col items-center">
                  <DialogHeader className="w-full items-center">
                    <DialogTitle className="text-center w-full text-blue-700 text-xl font-bold mb-1">
                      {selected.nama}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="text-gray-600 mb-2 text-center">
                    {selected.peran}
                  </div>
                  {selected.deskripsi && (
                    <div className="text-gray-700 text-sm mt-2 text-center">
                      {selected.deskripsi}
                    </div>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>
      {/* Riwayat Pengembangan Section */}
      <section className="w-full max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          <CalendarCheck className="w-6 h-6 text-blue-500" />
          Riwayat Pengembangan
        </h2>
        <div className="flex flex-col gap-3">
          {data.riwayat.map((r, i) => (
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
          {data.testimoni.map((t, i) => (
            <Card key={i} className="flex flex-col gap-2 p-4">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-blue-700">{t.nama}</span>
              </div>
              <p className="text-gray-700 italic">&quot;{t.isi}&quot;</p>
            </Card>
          ))}
        </div>
      </section>
      {/* Maps KKM Section */}
      <section className="w-full max-w-2xl mx-auto mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          <span role="img" aria-label="maps">
            🗺️
          </span>
          {data.lokasi.title}
        </h2>
        <div className="w-full aspect-video rounded-lg overflow-hidden border shadow">
          <iframe
            src={data.lokasi.mapsUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Kegiatan KKM"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
