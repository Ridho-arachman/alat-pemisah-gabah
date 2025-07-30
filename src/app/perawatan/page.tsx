"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, AlertCircle, Calendar, Phone } from "lucide-react";

const perawatan = [
  {
    judul: "Bersihkan alat secara berkala",
    isi: "Pastikan tidak ada sisa gabah atau debu yang menumpuk di dalam alat.",
  },
  {
    judul: "Periksa blower dan kabel",
    isi: "Cek kondisi blower dan kabel listrik secara rutin untuk menghindari kerusakan.",
  },
  {
    judul: "Lumasi bagian bergerak",
    isi: "Oleskan pelumas pada bagian yang bergerak agar tidak macet.",
  },
];

const troubleshooting = [
  {
    masalah: "Blower tidak menyala",
    solusi: "Periksa sambungan listrik dan pastikan kabel tidak putus.",
  },
  {
    masalah: "Gabah tidak terpisah dengan baik",
    solusi:
      "Atur kecepatan blower dan pastikan tidak ada sumbatan pada saluran.",
  },
  {
    masalah: "Alat bergetar berlebihan",
    solusi:
      "Pastikan alat diletakkan di permukaan rata dan baut terpasang kencang.",
  },
];

const jadwal = [
  { waktu: "Setiap Selesai Pakai", tugas: "Bersihkan sisa gabah & debu." },
  { waktu: "Mingguan", tugas: "Periksa blower, kabel, dan baut pengikat." },
  { waktu: "Bulanan", tugas: "Lumasi bagian bergerak & cek performa alat." },
];

export default function Perawatan() {
  return (
    <div className="flex flex-col gap-12 py-4">
      {/* Tabs Section */}
      <section>
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 text-center">
          Perawatan & Troubleshooting
        </h1>
        <Tabs defaultValue="perawatan" className="w-full">
          <TabsList className="mb-4 flex justify-center">
            <TabsTrigger className="cursor-pointer" value="perawatan">
              Perawatan
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="troubleshooting">
              Troubleshooting
            </TabsTrigger>
          </TabsList>
          <TabsContent value="perawatan">
            <div className="grid md:grid-cols-2 gap-4">
              {perawatan.map((item, i) => (
                <Card key={i} className="flex flex-row items-start gap-3 p-4">
                  <Wrench className="w-6 h-6 text-blue-500 mt-1" />
                  <CardContent className="p-0">
                    <h2 className="font-semibold text-lg mb-1">{item.judul}</h2>
                    <p className="text-gray-700">{item.isi}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="troubleshooting">
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-2xl mx-auto"
            >
              {troubleshooting.map((item, i) => (
                <AccordionItem value={`item-${i}`} key={i}>
                  <AccordionTrigger className="font-semibold text-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                    {item.masalah}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.solusi}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </section>
      {/* Jadwal Perawatan Section */}
      <section className="w-full max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          Jadwal Perawatan Rutin
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {jadwal.map((j, i) => (
            <Card key={i} className="flex flex-col items-center gap-2 p-4">
              <Calendar className="w-6 h-6 text-blue-500" />
              <h3 className="font-semibold text-lg text-center">{j.waktu}</h3>
              <p className="text-gray-600 text-center text-sm">{j.tugas}</p>
            </Card>
          ))}
        </div>
      </section>
      {/* Kontak Bantuan Section */}
      <section className="w-full max-w-xl mx-auto">
        <Card className="flex flex-row items-center gap-3 p-4 mt-4">
          <Phone className="w-6 h-6 text-blue-500" />
          <CardContent className="p-0">
            <h2 className="font-semibold text-lg mb-1">
              Butuh Bantuan Teknis?
            </h2>
            <p className="text-gray-700">
              Hubungi tim teknis kami di{" "}
              <a
                href="https://wa.me/6281234567890"
                className="underline text-blue-700"
              >
                0812-3456-7890
              </a>
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
