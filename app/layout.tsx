import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700"] });
const spaceMono = Space_Mono({ subsets: ["latin"], variable: "--font-space-mono", weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Daniel Lee",
  description: "Product Manager | UW MSTI (HCI)",
  openGraph: {
    title: "Daniel Lee — Product Manager",
    description: "Product manager with a background in franchise operations, government programs, and accessibility technology.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
