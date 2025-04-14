import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RobimyDobrzeStrony",
  description:
    "Strony internetowe, sklepy, aplikacje. Wszystko byś mógł zarabiać!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${sora.variable}`}>{children}</body>
    </html>
  );
}
