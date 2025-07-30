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
import data from "@/lib/home.json";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center min-h-[70vh] py-8 px-2">
      {/* Hero Section */}
      <Card className="w-full max-w-xl shadow-xl border-0">
        <CardContent className="flex flex-col items-center gap-6 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 text-center">
            {data.hero.title}
          </h1>
          <p className="text-gray-600 text-lg text-center max-w-lg">
            {data.hero.description}
          </p>
          <div className="relative w-64 h-40 md:w-80 md:h-52 rounded-lg overflow-hidden border-2 border-blue-100 bg-gray-100 shadow hover:scale-105 transition-transform">
            <Image
              src={data.hero.image}
              alt={data.hero.imageAlt}
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
              {data.hero.buttonText} <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {data.links.map((link: any, i: number) => (
              <Link
                key={i}
                href={link.href}
                className="text-blue-700 hover:underline font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      {/* Fitur Section */}
      <section className="w-full max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          Fitur Utama Alat
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {data.fitur.map((f: any, i: number) => (
            <Card key={i} className="flex flex-col items-center gap-2 p-4">
              {f.title === "Hemat Energi" && (
                <Zap className="w-6 h-6 text-blue-500" />
              )}
              {f.title === "Aman & Mudah" && (
                <ShieldCheck className="w-6 h-6 text-blue-500" />
              )}
              {f.title === "Akurasi Tinggi" && (
                <CheckCircle className="w-6 h-6 text-blue-500" />
              )}
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
          {data.faq.map((item: any, i: number) => (
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
