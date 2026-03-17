export const metadata = {
  title: "VeriSpec Technology Inc.",
  description:
    "Operational control software for regulated and procedure-driven environments.",
  openGraph: {
    title: "VeriSpec Technology Inc.",
    description:
      "Operational control software for regulated and procedure-driven environments.",
    url: "https://verispec.net",
    siteName: "VeriSpec Technology Inc.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "VeriSpec Technology Inc.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VeriSpec Technology Inc.",
    description:
      "Operational control software for regulated and procedure-driven environments.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}