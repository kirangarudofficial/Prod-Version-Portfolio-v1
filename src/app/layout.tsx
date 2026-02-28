import type { Metadata } from "next";
import { Bricolage_Grotesque, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Platform Engineering Excellence | Cloud Infrastructure & DevOps Services",
  description: "We deliver production-grade cloud infrastructure, platform engineering, and DevOps automation services. Specializing in AWS, Kubernetes, Terraform, and CI/CD excellence.",
  keywords: ["Platform Engineering", "DevOps Services", "Cloud Infrastructure", "AWS", "Kubernetes", "Terraform", "CI/CD", "Infrastructure as Code"],
  authors: [{ name: "Kiran Garud" }],
  openGraph: {
    title: "Kiran Garud | DevOps & Platform Engineer",
    description: "Senior DevOps & Platform Engineer specializing in AWS, Kubernetes, Terraform, and CI/CD pipeline architecture.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran Garud | DevOps & Platform Engineer",
    description: "Senior DevOps & Platform Engineer specializing in AWS, Kubernetes, Terraform, and CI/CD pipeline architecture.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Preload Hero background image so it renders on first paint */}
        <link
          rel="preload"
          href="/abstract-black-futuristic-background.jpg"
          as="image"
          fetchPriority="high"
        />
        {/* Theme init — runs before paint to prevent flash of unstyled content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':true;if(d)document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className={`${bricolage.variable} ${syne.variable} ${jetbrains.variable} antialiased font-sans`} suppressHydrationWarning>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}