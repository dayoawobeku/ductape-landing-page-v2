import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ductape",
  description: "Ductape Homepage",
  openGraph: {
    title: "Ductape",
    description: "Ductape Homepage",
    siteName: "Ductape",
    images: [
      {
        url: "/images/ductape.png",
        width: 1200,
        height: 630,
        alt: "Ductape Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
