import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Alat Pemisah Gabah",
  description:
    "Website alat pemisah gabah berisi dan kosong berbasis blower mesin air.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-gray-50 min-h-screen font-body">
        <Navbar />
        <main className="max-w-2xl mx-auto px-2 py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
