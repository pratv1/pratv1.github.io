import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata = {
  title: "Pratik V | Front-End Developer",
  description: "I am a front end developer based in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} bg-zinc-900 font-sans text-white`}
      >
        <main className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-0 z-10 hidden h-20 w-[1280px] -translate-x-1/2 justify-center text-white opacity-20 sm:flex">
            <div className="absolute h-full w-[1280px] border-x border-dashed border-white">
              <span className="p-1 font-mono text-xs">1280px</span>
              <span className="absolute right-0 p-1 font-mono text-xs">
                1280px
              </span>
            </div>
            <div className="absolute h-full w-[1024px] border-x border-dashed border-white">
              <span className="p-1 font-mono text-xs">1024px</span>
              <span className="absolute right-0 p-1 font-mono text-xs">
                1024px
              </span>
            </div>
            <div className="absolute h-full w-[768px] border-x border-dashed border-white">
              <span className="p-1 font-mono text-xs">768px</span>
              <span className="absolute right-0 p-1 font-mono text-xs">
                768px
              </span>
            </div>
            <div className="absolute h-full w-[640px] border-x border-dashed border-white">
              <span className="p-1 font-mono text-xs">640px</span>
              <span className="absolute right-0 p-1 font-mono text-xs">
                640px
              </span>
            </div>
            <div className="absolute h-full w-[360px] border-x border-dashed border-white lg:hidden">
              <span className="p-1 font-mono text-xs">360px</span>
              <span className="absolute right-0 p-1 font-mono text-xs">
                360px
              </span>
            </div>
            <div className="absolute h-full w-full bg-gradient-to-b from-transparent from-50% to-zinc-950" />
          </div>
          {children}
        </main>
        <footer className="bg-zinc-950 shadow-inner">
          <div className="container py-6 text-center font-medium text-slate-300">
            Designed and coded by... <i>*drumroll*</i> ... me!
          </div>
        </footer>
      </body>
    </html>
  );
}
