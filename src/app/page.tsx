import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const fitur = [
  {
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    title: "Hemat Energi",
    desc: "Menggunakan blower efisien dan konsumsi listrik rendah.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    title: "Aman & Mudah",
    desc: "Desain ramah pengguna, mudah dibersihkan dan dirawat.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
    title: "Akurasi Tinggi",
    desc: "Pemisahan gabah berisi & kosong sangat akurat.",
  },
];

const faq = [
  {
    q: "Apakah alat ini mudah dipindahkan?",
    a: "Ya, alat ini didesain portabel dan ringan.",
  },
  {
    q: "Apakah bisa digunakan di luar ruangan?",
    a: "Bisa, asalkan tidak terkena hujan langsung dan tetap di tempat kering.",
  },
  {
    q: "Berapa kapasitas pemisahan per jam?",
    a: "Sekitar 50-100 kg/jam tergantung jenis gabah dan blower.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center min-h-[70vh] py-8 px-2">
      {/* Hero Section */}
      <Card className="w-full max-w-xl shadow-xl border-0">
        <CardContent className="flex flex-col items-center gap-6 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 text-center">
            Alat Pemisah Gabah Berisi dan Gabah Kosong Berbasis Blower Mesin Air
          </h1>
          <p className="text-gray-600 text-lg text-center max-w-lg">
            Solusi tepat guna untuk meningkatkan hasil panen dan efisiensi kerja
            petani. Alat ini memisahkan gabah berisi dan kosong secara efisien
            menggunakan blower mesin air.
          </p>
          <div className="relative w-64 h-40 md:w-80 md:h-52 rounded-lg overflow-hidden border-2 border-blue-100 bg-gray-100 shadow hover:scale-105 transition-transform">
            <Image
              src="/file.svg"
              alt="Gambar Alat (placeholder)"
              fill
              className="object-contain"
            />
          </div>
          <Button
            asChild
            size="lg"
            className="mt-2 w-full max-w-xs flex gap-2 items-center"
          >
            <Link href="/cara-penggunaan">
              Lihat Panduan Penggunaan <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <Link
              href="/perawatan"
              className="text-blue-700 hover:underline font-medium"
            >
              Perawatan
            </Link>
            <Link
              href="/video"
              className="text-blue-700 hover:underline font-medium"
            >
              Video
            </Link>
            <Link
              href="/unduh"
              className="text-blue-700 hover:underline font-medium"
            >
              Unduh Modul
            </Link>
            <Link
              href="/tentang"
              className="text-blue-700 hover:underline font-medium"
            >
              Tentang
            </Link>
          </div>
        </CardContent>
      </Card>
      {/* Fitur Section */}
      <section className="w-full max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          Fitur Utama Alat
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {fitur.map((f, i) => (
            <Card key={i} className="flex flex-col items-center gap-2 p-4">
              {f.icon}
              <h3 className="font-semibold text-lg text-center">{f.title}</h3>
              <p className="text-gray-600 text-center text-sm">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          FAQ
        </h2>
        <Accordion type="single" collapsible>
          {faq.map((item, i) => (
            <AccordionItem value={`faq-${i}`} key={i}>
              <AccordionTrigger className="text-base font-medium flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-400" />
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
