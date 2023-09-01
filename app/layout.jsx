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
      <body className={`${inter.variable} ${firaCode.variable} font-sans`}>
        <main className="relative bg-gray-50">
          <div className="pointer-events-none absolute left-1/2 top-0 z-0 flex h-full w-[1280px] -translate-x-1/2 justify-center">
            <div className="absolute h-full w-[1280px] border-x border-dashed">
              <span className="p-1 font-mono text-xs opacity-50">1280px</span>
              <span className="absolute right-0 p-1 font-mono text-xs opacity-50">
                1280px
              </span>
            </div>
            <div className="absolute h-full w-[1024px] border-x border-dashed">
              <span className="p-1 font-mono text-xs opacity-50">1024px</span>
              <span className="absolute right-0 p-1 font-mono text-xs opacity-50">
                1024px
              </span>
            </div>
            <div className="absolute h-full w-[768px] border-x border-dashed">
              <span className="p-1 font-mono text-xs opacity-50">768px</span>
              <span className="absolute right-0 p-1 font-mono text-xs opacity-50">
                768px
              </span>
            </div>
            <div className="absolute h-full w-[640px] border-x border-dashed">
              <span className="p-1 font-mono text-xs opacity-50">640px</span>
              <span className="absolute right-0 p-1 font-mono text-xs opacity-50">
                640px
              </span>
            </div>
            {/* <div className="absolute h-full w-[360px] border-x border-dashed">
              <span className="p-1 font-mono text-xs opacity-50">360px</span>
              <span className="absolute right-0 p-1 font-mono text-xs opacity-50">
                360px
              </span>
            </div> */}
          </div>
          {children}
        </main>
        <footer className="bg-gradient-to-r from-indigo-600 via-sky-700 to-emerald-600 shadow-inner">
          <div className="container py-5 text-center font-medium text-white">
            Designed and coded by... <i>*drumroll*</i> ... me!
          </div>
        </footer>
      </body>
    </html>
  );
}
