"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/cara-penggunaan", label: "Cara Penggunaan" },
  { href: "/perawatan", label: "Perawatan" },
  { href: "/video", label: "Video" },
  { href: "/unduh", label: "Unduh Modul" },
  { href: "/tentang", label: "Tentang" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-white shadow-md px-2 md:px-4 py-3 md:py-5 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2 md:gap-4 min-w-0">
        <div className="flex items-center gap-1 md:gap-2">
          <Image
            src="/logo.png"
            alt="Logo Alat"
            width={100}
            height={100}
            className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-blue-100 object-contain"
            priority
          />
          <Image
            src="/logo_uniba.png"
            alt="Logo Alat"
            width={100}
            height={100}
            className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-blue-100 object-contain"
            priority
          />
        </div>
        <Link
          href="/"
          className="font-bold text-base md:text-lg tracking-tight hover:opacity-80 transition max-w-full lg:max-w-none whitespace-normal lg:whitespace-nowrap text-center lg:text-left"
        >
          <div className="flex flex-col">
            <span>Panduan Penggunaan</span>
            <br className="hidden" />
            <span>Alat Pemisah Gabah</span>
          </div>
        </Link>
      </div>
      <div className="space-x-1 hidden lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-2 md:px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 ${
              link.href === "/"
                ? pathname === "/"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700"
                : pathname.startsWith(link.href)
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Button asChild className="ml-2">
          <Link href="/cara-penggunaan">Panduan</Link>
        </Button>
      </div>
      {/* Mobile menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Buka menu">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 max-w-[90vw]">
            <div
              className="flex flex-col h-full"
              aria-labelledby="mobile-menu-title"
            >
              <div className="flex items-center gap-2 px-4 py-4 border-b">
                <Image
                  src="/logo.png"
                  alt="Logo Alat"
                  width={28}
                  height={28}
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 object-contain"
                  priority
                />
                <Link
                  href="/"
                  className="font-bold text-base tracking-tight hover:opacity-80 transition truncate"
                >
                  <SheetTitle>
                    Kelompok KKM 71 Universitas Bina Bangsa
                  </SheetTitle>
                </Link>
              </div>
              <div className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2 md:px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                      link.href === "/"
                        ? pathname === "/"
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700"
                        : pathname.startsWith(link.href)
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-2 w-full">
                  <Link href="/cara-penggunaan">Panduan</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
