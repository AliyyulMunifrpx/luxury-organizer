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

// === KONSTRUKSI DINAMIS METADATA SEO DARI OBJECT INFORMATION ===
const siteName = information.name; // escala.planner
const city = information.city; // Yogyakarta
const titleText = `${siteName} — Wedding Planner & Organizer ${city}`;
const descriptionText = `${siteName} adalah wedding planner & organizer profesional berbasis di ${city}. Kami hadir untuk mewujudkan momen pernikahan impian yang terstruktur, elegan, dan tak terlupakan.`;

export const metadata = {
  metadataBase: new URL("https://escalaplanner.com"), // Sesuaikan dengan domain production kamu
  title: {
    default: titleText,
    template: `%s | ${siteName}`,
  },
  description: descriptionText,
  keywords: [
    siteName,
    `wedding planner ${city.toLowerCase()}`,
    `wedding organizer ${city.toLowerCase()}`,
    "wedding organizer jogja",
    "wedding planner jogja",
    "wo jogja",
    "jasa wo yogyakarta",
    "intimate wedding jogja",
    "paket pernikahan yogyakarta",
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
    locale: "id_ID",
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
      lang="id"
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

        {/* 'overflow-x-hidden' dipasang di main agar aman dari horizontal overflow tanpa memutus scroll window */}
        <main className="flex-1 overflow-x-hidden">{children}</main>

        <Footer id="footer" />
      </body>
    </html>
  );
}
