import type { Metadata } from "next";
import data from "@/lib/tentang.json";

export const metadata: Metadata = {
  title: data.title,
  description: data.infoAlat?.namaAlat || "Tentang alat dan tim KKM 71.",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default layout;
