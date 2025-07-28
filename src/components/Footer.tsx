import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t mt-8 py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-700 text-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo KKM"
            className="w-10 h-10 object-contain rounded"
            width={40}
            height={40}
          />
          <Image
            src="/logo_uniba.png"
            alt="Logo Universitas"
            className="w-10 h-10 object-contain rounded"
            width={40}
            height={40}
          />
        </div>
        <div>
          <div className="font-bold text-base">Universitas Bina Bangsa</div>
          <div className="text-xs">
            Kelompok KKM 71 Desa Binong, Kecamatan Pamarayan
          </div>
        </div>
      </div>
      <div className="text-center md:text-right max-w-xs">
        Website pendukung alat pemisah gabah untuk efisiensi panen petani.
      </div>
    </footer>
  );
}
