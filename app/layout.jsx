import { cn } from "@/utils";
import { Fira_Code, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ExternalLink, Github, Home } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata = {
  title: "Pratik V | Front-end Developer",
  description: "I am a front-end developer based in India.",
  metadataBase: new URL("https://pratv1.github.io"),
  verification: {
    google: "pMTfyz5MQ6hLMGN_lXy0D7SRX9ObeGlQIYG_11_9brY",
  },
};

export const viewport = {
  colorScheme: "dark light",
  themeColor: "#09090b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="darkreader-lock" />
      <body
        className={`${inter.variable} ${firaCode.variable} bg-zinc-950 font-sans text-white`}
      >
        <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-md">
          <div className="container flex items-center justify-between py-3">
            <Link
              href="/"
              title="Home"
              className="flex items-center space-x-3 whitespace-nowrap text-gray-300 transition-all hover:text-white"
            >
              <Home size={20} />
              <span className="hidden font-bold sm:inline-block">Pratik V</span>
            </Link>
            <div className="flex w-full items-center justify-end">
              {[
                { title: "About", href: "/#about" },
                { title: "Projects", href: "/#projects" },
                { title: "Contact", href: "/#contact" },
                { title: "Blog", href: "/blog" },
              ].map((el, i) => (
                <Link
                  key={i}
                  href={el.href}
                  className={cn(
                    "rounded-full border border-transparent px-3.5 py-1.5 text-sm font-semibold text-gray-300 transition-all hover:bg-zinc-900 hover:text-white active:bg-zinc-800",
                    el.title !== "Blog" && "hidden sm:block",
                  )}
                >
                  {el.title}
                </Link>
              ))}
              <Link
                href="https://github.com/pratv1/pratv1.github.io"
                target="_blank"
                className="ml-3.5 text-gray-300 transition-all hover:text-white"
                title="View source on GitHub"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-black text-sm">
          <div className="container flex flex-col items-center justify-center py-6 text-center text-slate-400 md:flex-row">
            <span>Designed and coded by Pratik</span>
            <span className="mx-2 opacity-60">•</span>
            <a
              className="flex items-center space-x-1.5 transition-all hover:text-slate-300 hover:underline"
              href="https://github.com/pratv1/pratv1.github.io"
              target="_blank"
            >
              <span>View source on GitHub</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
