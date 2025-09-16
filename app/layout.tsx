import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: "Paul3 - Artista Conceptual",
  description: "Sitio oficial de Paul3, artista conceptual paraguayo que comparte cómo él interpreta la realidad y lo cotidiano.",
  keywords: [
    "Paul3",
    "Paule",
    "Paule Godoy",
    "arte contemporáneo",
    "artista paraguayo",
    "fotografía conceptual",
    "instalación",
    "pintura",
    "arte trans",
    "arte conceptual Paraguay",
    "queer",
    "neurodivergente",
    "arte y género",
    "trans art",
    "marrón",
    "antiracismo",
  ],
  icons: { 
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Paul3 - Artista Conceptual",
    description: "Sitio oficial de Paul3, artista conceptual paraguayo que comparte cómo él interpreta la realidad y lo cotidiano.",
    images: ["/paulenblanco.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul3 - Artista Conceptual",
    description: "Sitio oficial de Paul3, artista conceptual paraguayo que comparte cómo él interpreta la realidad y lo cotidiano.",
    images: ["/paulenblanco.png"], 
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
