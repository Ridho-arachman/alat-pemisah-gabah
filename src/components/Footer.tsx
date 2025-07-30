import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t mt-8 py-4 px-2 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-700 text-sm">
      <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto justify-center md:justify-start">
        <div className="flex items-center gap-1 md:gap-2">
          <Image
            src="/logo.png"
            alt="Logo KKM"
            className="w-8 h-8 md:w-10 md:h-10 object-contain rounded"
            width={100}
            height={100}
          />
          <Image
            src="/logo_uniba.png"
            alt="Logo Universitas"
            className="w-8 h-8 md:w-10 md:h-10 object-contain rounded"
            width={100}
            height={100}
          />
        </div>
        <div className="ml-2 max-w-full text-center md:text-left">
          <div className="font-bold text-sm md:text-base">
            Universitas Bina Bangsa
          </div>
          <div className="text-xs">
            Kelompok KKM 71 Desa Binong, Kecamatan Pamarayan
          </div>
        </div>
      </div>
      <div className="text-center md:text-right max-w-full md:max-w-xs">
        Website pendukung alat pemisah gabah untuk efisiensi panen petani.
      </div>
    </footer>
  );
}
