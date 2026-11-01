import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Devendra Singh Rana | Fullstack Developer Portfolio",
  description:
    "Portfolio of Devendra Singh Rana - Fullstack Developer specializing in MERN stack, Next.js, React, Node.js, and modern web applications.",
  keywords: [
    "Devendra Singh Rana",
    "Fullstack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Developer",
    "Frontend Engineer",
  ],
  authors: [{ name: "Devendra Singh Rana", url: "https://github.com/devendra-508" }],
  creator: "Devendra Singh Rana",
  metadataBase: new URL("https://devendrasinghrana.vercel.app"),
  openGraph: {
    title: "Devendra Singh Rana | Fullstack Developer Portfolio",
    description:
      "Fullstack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore projects, skills, and experience.",
    url: "https://devendrasinghrana.vercel.app",
    siteName: "Devendra Singh Rana Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devendra Singh Rana | Fullstack Developer Portfolio",
    description:
      "Fullstack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    creator: "@devendra-508",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/icon.png",
  },
};

export const viewport = {
  themeColor: "#050414",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans bg-[#050414] text-white antialiased">
        {children}
      </body>
    </html>
  );
}

