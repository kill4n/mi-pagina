import type { Metadata } from "next";
import { Montserrat, Lato, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dagoberto Quiroga Collazos | Superintendente de Servicios Públicos",
  description: "Abogado, líder en servicios públicos y administración pública con amplia experiencia en el sector gubernamental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lato.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
