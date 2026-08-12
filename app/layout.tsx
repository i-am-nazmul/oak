import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creators Oak | Social Media Agency",
  description: "Connecting companies and creators to build meaningful campaigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground">
        {/* Background Videos */}
        <div className="fixed inset-0 -z-50 w-full h-full bg-black">
          {/* Desktop Video (16:9) */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="hidden sm:block w-full h-full object-cover opacity-80"
          >
            <source src="/oak16to9.mp4" type="video/mp4" />
          </video>
          
          {/* Mobile Video (9:16) */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="block sm:hidden w-full h-full object-cover opacity-80"
          >
            <source src="/oak9to16.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Main Content */}
        <div className="relative z-0 flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
