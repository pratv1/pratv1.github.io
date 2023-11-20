"use client";

import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/utils";

export default function Template({ children }) {
  const pathname = usePathname();

  if (pathname === "/blog") return <div>{children}</div>;
  return <BlogPostTemplate>{children}</BlogPostTemplate>;
}

const BlogPostTemplate = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [hideScrollProgress, setHideScrollProgress] = useState(false);

  const [headings, setHeadings] = useState([]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const shouldHide = progress === 1;
    if (shouldHide !== hideScrollProgress) setHideScrollProgress(shouldHide);
  });

  useEffect(() => {
    if (!ref.current) return;

    setHeadings(
      Array.from(ref.current.querySelectorAll("h1, h2, h3")).map((el) => ({
        id: el.id,
        title: el.tagName === "H1" ? "Introduction" : el.textContent,
        level: ["H1", "H2"].includes(el.tagName) ? 1 : 2,
      })),
    );
  }, [ref]);

  return (
    <section
      ref={ref}
      className="relative"
      // style={{
      //   background: [
      //     "radial-gradient(at top left, rgba(30, 58, 138, 0.15), transparent 50%)",
      //   ].join(", "),
      // }}
    >
      <motion.div
        id="progress-bar"
        className="fixed left-0 right-0 top-[59px] z-10 h-0.5 origin-left bg-gradient-to-r from-blue-600 to-blue-400"
        style={{ scaleX: scrollYProgress }}
        animate={{ opacity: hideScrollProgress ? 0 : 1 }}
      />
      <div className="container pb-20 pt-9">
        <Link
          href="/blog"
          className="mb-6 flex w-fit items-center space-x-1 text-blue-300 no-underline transition-all hover:text-blue-200 hover:underline lg:mb-10"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Back to blog</span>
        </Link>
        <div className="relative flex">
          <div
            className={cn(
              "prose prose-sm prose-slate prose-invert min-w-0 max-w-none border-zinc-900 lg:prose-base lg:border-r lg:pr-6",
              "prose-pre:border prose-pre:border-zinc-900 prose-pre:bg-zinc-900/50",
              "prose-code:before:content-none prose-code:after:content-none",
              "prose-video:mx-auto prose-video:w-full prose-video:max-w-3xl prose-video:overflow-hidden prose-video:rounded-md",
            )}
          >
            {children}
          </div>
          <div className="sticky top-[calc(59px+28px)] hidden shrink-0 basis-80 self-start px-6 lg:block">
            <div className="font-bold">In this article</div>
            <div className="mt-6 space-y-3 text-sm">
              {headings.map((heading, i) => (
                <a
                  key={i}
                  href={`#${heading.id}`}
                  className={cn(
                    "block text-slate-300 transition-all hover:text-white",
                    heading.level === 2 && "ml-3",
                  )}
                >
                  {heading.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
