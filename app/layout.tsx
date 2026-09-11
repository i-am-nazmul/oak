import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./splash.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://creatorsoak.com"),
  title: "Influencer Marketing Agency in India | Creators Oak",
  description:
    "Creators Oak is an influencer marketing agency in India connecting brands with creators for authentic collaborations, brand deals and campaigns that drive growth.",
  keywords: [
    "Influencer Marketing Agency in India",
    "Creators Oak",
    "creator management",
    "influencer collaborations",
    "brand deals",
    "social media agency India",
  ],
  authors: [{ name: "Creators Oak", url: "https://creatorsoak.com" }],
  creator: "Creators Oak",
  publisher: "Creators Oak",
  alternates: {
    canonical: "https://creatorsoak.com",
  },
  openGraph: {
    title: "Influencer Marketing Agency in India | Creators Oak",
    description:
      "Creators Oak is an influencer marketing agency in India connecting brands with creators for authentic collaborations, brand deals and campaigns that drive growth.",
    url: "https://creatorsoak.com",
    siteName: "Creators Oak",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/goldentree.png",
        width: 1200,
        height: 630,
        alt: "Creators Oak - Influencer Marketing Agency in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Agency in India | Creators Oak",
    description:
      "Creators Oak is an influencer marketing agency in India connecting brands with creators for authentic collaborations, brand deals and campaigns that drive growth.",
    images: ["/goldentree.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://creatorsoak.com/#website",
      "url": "https://creatorsoak.com",
      "name": "Creators Oak",
      "description":
        "Creators Oak is an influencer marketing agency in India connecting brands with creators for authentic collaborations, brand deals and campaigns that drive growth.",
      "publisher": {
        "@id": "https://creatorsoak.com/#organization",
      },
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://creatorsoak.com/#organization",
      "name": "Creators Oak",
      "url": "https://creatorsoak.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://creatorsoak.com/goldentree.png",
      },
      "image": "https://creatorsoak.com/goldentree.png",
      "description":
        "Creators Oak is an influencer marketing agency in India connecting brands with creators for authentic collaborations, brand deals and campaigns that drive growth.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
      },
    },
    {
      "@type": "ItemList",
      "name": "Creators Oak Sitelinks",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "For Brands",
          "description":
            "Partner with Creators Oak to run influencer marketing campaigns ...",
          "url": "https://creatorsoak.com/#brands",
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "For Creators",
          "description":
            "Join Creators Oak and collaborate with top brands for exciting ...",
          "url": "https://creatorsoak.com/#creators",
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Our Work",
          "description":
            "Explore our influencer marketing campaigns and brand collaborations.",
          "url": "https://creatorsoak.com/#work",
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Contact Us",
          "description":
            "Get in touch with Creators Oak for influencer marketing and collaborations.",
          "url": "https://creatorsoak.com/#contact",
        },
      ],
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        {/* Main Content */}
        <div className="relative z-0 flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
