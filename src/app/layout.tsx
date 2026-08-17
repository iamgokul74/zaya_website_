import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zayathon.in"),
  title: {
    default: "ZAYATHON '26 — Turn Ideas Into Impact",
    template: "%s | ZAYATHON '26",
  },
  description:
    "Official hackathon by ZAYA CODE HUB. A high-intensity technology hackathon featuring 9 challenge domains and a 10-hour non-stop build window for student builders.",
  keywords: [
    "ZAYATHON",
    "ZAYA CODE HUB",
    "Hackathon 2026",
    "Student Hackathon",
    "Agentic AI",
    "Robotics",
    "Cybersecurity",
    "Tech Competition",
  ],
  authors: [{ name: "ZAYA CODE HUB", url: "https://www.zayacodehub.online/" }],
  creator: "ZAYA CODE HUB",
  openGraph: {
    title: "ZAYATHON '26 — Turn Ideas Into Impact",
    description:
      "A high-intensity technology hackathon where builders, designers, and problem-solvers turn real-world challenges into working solutions.",
    url: "https://www.zayathon.in",
    siteName: "ZAYATHON '26",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZAYATHON '26 — Turn Ideas Into Impact",
    description: "Official hackathon by ZAYA CODE HUB. 9 Innovation Domains, 10-Hour Build Sprint.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-signal-bg text-signal-text font-sans antialiased min-h-screen selection:bg-signal-lime selection:text-signal-bg relative">
        <SmoothScrollProvider>
          {/* Subtle Global Ambient Background Grid */}
          <div
            aria-hidden="true"
            className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none z-0"
          />

          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
