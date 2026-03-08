import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JoeyMed for Business — Employer-Sponsored Health & GLP-1 Programs",
  description:
    "JoeyMed for Business delivers clinically supervised GLP-1 weight management, TRT, and HRT programs for employers. At-home testing, telehealth support, and measurable outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..800;1,9..40,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
