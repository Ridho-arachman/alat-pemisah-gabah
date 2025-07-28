"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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

export default function Perawatan() {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        Perawatan & Troubleshooting
      </h1>
      <Tabs defaultValue="perawatan" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="perawatan">Perawatan</TabsTrigger>
          <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
        </TabsList>
        <TabsContent value="perawatan">
          <div className="space-y-4">
            {perawatan.map((item, i) => (
              <div key={i} className="bg-white border rounded shadow p-4">
                <h2 className="font-semibold text-lg mb-1">{item.judul}</h2>
                <p>{item.isi}</p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="troubleshooting">
          <Accordion type="single" collapsible className="w-full">
            {troubleshooting.map((item, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger>{item.masalah}</AccordionTrigger>
                <AccordionContent>{item.solusi}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}
