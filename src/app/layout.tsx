import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({ 
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});
 
export const metadata: Metadata = {
  title: 'Victor Kingsley | Creative Software Developer',
  description: 'I am Victor Kingsley, a 19-year-old Techie with 2 years of experience. I specialize in web development, robotics, blockchain development, and short video animation, crafting clean and effective digital solutions.',
  keywords: ['Software Developer', 'Web Development', 'Robotics', 'Video Animation', 'Blockchain Development', 'Full Stack Developer', 'Victor Kingsley'],
  authors: [{ name: 'Victor Kingsley' }],
  creator: 'Victor Kingsley',
  publisher: 'Victor Kingsley',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://victorkingsley.me.',
    siteName: 'Victor Kingsley Portfolio',
    title: 'Victor Kingsley | Creative Software Developer',
    description: 'Creative Software Developer specializing in web development, robotics, blockchain development, and short video animation. Building scalable products with great user experiences.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Victor Kingsley - Creative Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victor Kingsley | Creative Software Developer',
    description: 'Creative Software Developer building scalable products with great user experiences.',
    creator: '@victor_can_code',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  themeColor: '#6f1cd7',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Victor Kingsley ',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
