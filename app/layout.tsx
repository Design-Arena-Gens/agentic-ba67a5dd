import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: "AlpenCare Telemedizin",
  description:
    "Telemedizinische Cannabisversorgung in Deutschland mit zertifizierten Ärzt*innen, diskret und vollständig digital."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="de" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
