import type { Metadata } from "next";
import { Sono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const sono = Sono({
  variable: "--font-sono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omer",
  description: "Omer Landau's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${sono.variable} antialiased h-full`}>
        <div className="h-full bg-bg">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
