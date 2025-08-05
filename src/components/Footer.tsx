import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t mt-8 py-6 px-4 md:px-6 xl:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 xl:gap-8">
          {/* Logo and Institution Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full xl:w-auto">
            <div className="flex items-center gap-3 md:gap-4">
              <Image
                src="/logo.png"
                alt="Logo KKM"
                className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 object-contain rounded"
                width={100}
                height={100}
              />
              <Image
                src="/logo_uniba.png"
                alt="Logo Universitas"
                className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 object-contain rounded"
                width={100}
                height={100}
              />
            </div>
            <div className="text-center sm:text-left max-w-xs sm:max-w-none">
              <div className="font-bold text-sm md:text-base xl:text-lg text-gray-800">
                Universitas Bina Bangsa
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">
                Kelompok KKM 71 Desa Binong, Kecamatan Pamarayan
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-center xl:text-right max-w-sm xl:max-w-md 2xl:max-w-lg">
            <p className="text-xs md:text-sm xl:text-base text-gray-600 leading-relaxed">
              Website pendukung alat pemisah gabah untuk efisiensi panen petani.
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs text-gray-500">
              © 2024 KKM 71 - Teknologi Tepat Guna Alat Pemisah Gabah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
