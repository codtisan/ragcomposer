import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import TopBar from "../../components/bases/top-bar";
import { AppSidebar } from "@/components/bases/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAGComposer",
  description: "A Multi-Agent Graph RAG Orchestration Platform",
  icons: "/RAGComposer.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <TopBar />
          <div className="flex flex-row h-[95vh] w-[100vw]">
            <AppSidebar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
