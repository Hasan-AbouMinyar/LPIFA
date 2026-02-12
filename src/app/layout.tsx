import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "تعرف على الفريق — مشروع التخرج 2026",
  description:
    "تعرف على الفريق الموهوب خلف مشروع التخرج. تعرف على مطورينا ومصممينا ومهندسينا.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
