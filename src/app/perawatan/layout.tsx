import type { Metadata } from "next";
import data from "@/lib/perawatan.json";

export const metadata: Metadata = {
  title: data.title,
  description: "Tips perawatan dan troubleshooting alat pemisah gabah.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default layout;
