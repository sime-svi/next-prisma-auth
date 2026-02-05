import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plantilla Base",
  description: "Next.js 15 + Tailwind + Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}