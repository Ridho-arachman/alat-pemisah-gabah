"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/cara-penggunaan", label: "Cara Penggunaan" },
  { href: "/perawatan", label: "Perawatan" },
  { href: "/video", label: "Video" },
  { href: "/unduh", label: "Unduh Modul" },
  { href: "/tentang", label: "Tentang" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-white shadow-md px-4 py-2 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className=" w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          A
        </span>
        <Link
          href="/"
          className="font-bold text-lg tracking-tight hover:opacity-80 transition"
        >
          Alat Pemisah Gabah
        </Link>
      </div>
      <div className="space-x-1 hidden md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 ${
              pathname.startsWith(link.href)
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
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Buka menu">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 px-4 py-4 border-b">
                <span className=" w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </span>
                <Link
                  href="/"
                  className="font-bold text-lg tracking-tight hover:opacity-80 transition"
                >
                  Alat Pemisah Gabah
                </Link>
              </div>
              <div className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                      pathname.startsWith(link.href)
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
