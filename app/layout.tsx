import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";


const Jost = localFont({
  src: '../public/fonts/Jost-VariableFont_wght.ttf',
  variable: '--font-jost',
});

const LexendDeca = localFont({
  src: '../public/fonts/LexendDeca-VariableFont_wght.ttf',
  variable: '--font-lexend',
});


export const metadata: Metadata = {
  title: "Abdullahi Oluwafemi Solomon | Full Stack Developer",
  description:
    "Full-stack developer specializing in modern web applications, scalable backend systems, and high-performance user interfaces.",

  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Web Development",
    "Software Engineer",
  ],

  authors: [{ name: "Abdullahi Oluwafemi Solomon" }],

  creator: "Abdullahi Oluwafemi Solomon",

  openGraph: {
    title: "Abdullahi Oluwafemi Solomon | Full Stack Developer",
    description:
      "Building scalable digital products with modern web technologies.",
    url: "https://abdullahi-femi.netlify.app",
    siteName: "Abdullahi Oluwafemi Solomon Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Abdullahi Oluwafemi Solomon Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdullahi Oluwafemi Solomon | Full Stack Developer",
    description:
      "Full-stack developer building scalable digital experiences.",
    images: ["/profile.png"],
  },
  verification: {
    google: 'acGvkRy1Wgq-UIKuemd63fafw8bkB-UGKmCSBpltnd8',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdullahi Oluwafemi Solomon",
              jobTitle: "Full Stack Developer",
              url: "https://abdullahi-femi.netlify.app/",
              sameAs: [
                "https://github.com/HarYor785",
                "https://www.linkedin.com/in/abdullahi-oluwafemi-a91987255/"
              ],
            }),
          }}
        />
      </Head>
      <body
        className={`${LexendDeca.variable} ${Jost.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
