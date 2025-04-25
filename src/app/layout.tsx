import type { Metadata } from "next";
import "./globals.css";
import Head from 'next/head';


export const metadata: Metadata = {
  title: "Ductape",
  description: "Ductape Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/images/ductape.png" type="image/png" />
      </Head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
