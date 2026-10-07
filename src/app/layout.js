import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../../components/footer.jsx";
import Navbar from "../../components/navbar.jsx";
import { information } from "../../data/information.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

const cmuSerif = localFont({
  src: [
    {
      path: "../../public/fonts/cmu-serif/regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/cmu-serif/italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-cmu-serif",
});

// === DYNAMIC SEO METADATA CONSTRUCTION FROM INFORMATION OBJECT ===
const siteName = information.name; // escala.planner
const city = information.city; // Yogyakarta
const titleText = `${siteName} — Wedding Planner & Organizer ${city}`;
const descriptionText = `${siteName} is a professional wedding planner & organizer based in ${city}. We are dedicated to crafting your dream wedding into a structured, elegant, and unforgettable celebration.`;

export const metadata = {
  metadataBase: new URL("https://escalaplanner.com"),
  title: {
    default: titleText,
    template: `%s | ${siteName}`,
  },
  description: descriptionText,
  keywords: [
    siteName,
    `wedding planner ${city.toLowerCase()}`,
    `wedding organizer ${city.toLowerCase()}`,
    `wedding organizer ${city.toLowerCase()}`,
    `wedding planner ${city.toLowerCase()}`,
    `wo ${city.toLowerCase()}`,
    `wedding services ${information.city.toLowerCase()}`,
    `intimate wedding ${city.toLowerCase()}`,
    `wedding package ${information.city.toLowerCase()}`,
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: titleText,
    description: descriptionText,
    url: "/",
    siteName: siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteName} ${city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleText,
    description: descriptionText,
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${poppins.variable}
        ${cmuSerif.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col bg-primary text-white">
        <Navbar />

        {/* 'overflow-x-hidden' is set on main to prevent horizontal overflow without breaking window scroll */}
        <main className="flex-1 overflow-x-hidden">{children}</main>

        <Footer id="footer" />
      </body>
    </html>
  );
}
