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

export const metadata = {
  title: "VeriSpec Technology Inc.",
  description:
    "Operational control software for regulated and procedure-driven environments.",
};
  openGraph: {
    title: "VeriSpec Technology Inc.",
    description:
      "Controlled execution for high consequence work.",
    url: "https://verispec.net",
    siteName: "VeriSpec",
    images: [
      {
        url: "https://verispec.net/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
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
