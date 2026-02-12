import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "تعرف على الفريق — LPIFA",
  description:
    "تعرف على الفريق الموهوب خلف مشروع التخرج. تعرف على مطورينا ومصممينا ومهندسينا.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
