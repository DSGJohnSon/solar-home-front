import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import { StickyFooter } from "@/components/layout/footer/sticky-footer";
import { Header } from "@/components/layout/header";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  icons: {
    icon: "./logos/solar-home_logo_icon_gold-black.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${bricolageGrotesque.variable}`}
    >
      <body className="font-sans text-zinc-950 antialiased relative">
        <Header />
        {children}
        <StickyFooter />
      </body>
    </html>
  );
}
