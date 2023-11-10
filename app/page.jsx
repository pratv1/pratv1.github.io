"use client";

import XLogo from "@/public/icons/XLogo";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import {
  Briefcase,
  ChevronsDown,
  ExternalLink,
  Github,
  GraduationCap,
  Laptop,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="relative bg-zinc-950">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-0 z-10 hidden h-20 w-full -translate-x-1/2 justify-center text-zinc-600 sm:flex">
            {[
              "w-[360px]",
              "w-[640px]",
              "w-[768px]",
              "w-[1024px]",
              "w-[1280px]",
              "w-[1536px]",
            ].map((el, i) => {
              const width = el.replace("w-[", "").replace("]", "");
              return (
                <div
                  key={i}
                  className={cn(
                    "absolute h-full border-x border-dashed border-zinc-800",
                    el,
                  )}
                >
                  <span className="p-1 font-mono text-xs">{width}</span>
                  <span className="absolute right-0 p-1 font-mono text-xs">
                    {width}
                  </span>
                </div>
              );
            })}
            <div className="absolute h-full w-full bg-gradient-to-b from-transparent from-50% to-zinc-950" />
          </div>
          {Array(2)
            .fill()
            .map((_, i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950"
                animate={{
                  scaleX: 1.001, // Prevents gap between the two gradients
                  x: i === 0 ? ["0%", "100%"] : ["-100%", "0%"],
                  opacity: [1, 0.5, 1],
                  transition: { duration: 5, ease: "linear", repeat: Infinity },
                }}
              />
            ))}
          <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-transparent to-zinc-950 to-10%" />
        </div>

        <div className="container relative max-w-screen-lg py-28 text-center md:py-40">
          <h1 className="text-4xl font-extrabold sm:mt-10 sm:text-5xl md:text-6xl">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
              Pratik V.
            </span>
          </h1>
          <div className="mx-auto mt-10 max-w-4xl text-sm !leading-loose text-slate-300 lg:text-lg">
            <p>
              I'm a{" "}
              <b className="font-medium text-white">front-end developer</b>{" "}
              based in <b className="font-medium text-white">Bengaluru</b> and I
              love building beautiful and intuitive user experiences. I'm
              currently working at{" "}
              <a
                href="https://bolt.earth/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline decoration-white/50 decoration-dotted underline-offset-4 transition-all hover:text-emerald-300 hover:decoration-green-300/50"
              >
                Bolt.Earth
              </a>{" "}
              where I'm helping enable India's largest EV charging network.
            </p>
            <p className="mt-4">
              My current go-to stack is{" "}
              <span className="font-medium text-white">React with Next.js</span>{" "}
              and <span className="font-medium text-white">Tailwind CSS</span>.
            </p>
          </div>
        </div>
        <button
          className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 translate-y-1/2 cursor-pointer items-center rounded-full border-2 border-white bg-white px-3 py-1.5 text-sm font-semibold text-black shadow-xl transition-all hover:bg-zinc-950 hover:text-white lg:px-4 lg:py-2"
          href="/#about"
          onClick={() => {
            window.scrollTo({
              top: document.querySelector("#about").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          <ChevronsDown className="-ml-1.5 mr-1.5" size={18} />
          Know more
        </button>
      </section>

      <section
        id="about"
        className="border-t border-zinc-900 pt-4"
        style={{
          background: [
            "radial-gradient(at top left, rgba(76, 29, 149, 0.15), transparent 50%)",
            "radial-gradient(at center right, rgba(49, 46, 129, 0.15), transparent 50%)",
            "radial-gradient(at bottom left, rgba(6, 78, 59, 0.15), transparent 50%)",
          ].join(", "),
        }}
      >
        <div className="container py-14 lg:py-20">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-violet-300">
            About Me
          </div>
          <h3 className="mb-6 text-2xl font-bold sm:text-3xl lg:mb-10">
            Background and Work Experience
          </h3>
          {[
            {
              icon: (
                <GraduationCap className="relative h-6 w-6 lg:h-7 lg:w-7" />
              ),
              colors: {
                icon: "text-purple-300",
                iconBg:
                  "radial-gradient(rgba(88, 28, 135, 0.7), transparent 75%)",
                line: "from-purple-400 from-60% to-indigo-400",
              },
              timePeriod: "Apr 2015 – Apr 2019",
              title: "Secondary School (CBSE India)",
              // subtitle: "CBSE India",
              content: (
                <p>
                  I was first introduced to HTML in 2016 when I was in 10th
                  grade. I found it very fun to be able to write some code and
                  see it render on the screen. I started learning more about
                  HTML and CSS, and eventually JavaScript, and I've been hooked
                  ever since.
                </p>
              ),
            },
            {
              icon: <Laptop className="relative h-6 w-6 lg:h-7 lg:w-7" />,
              colors: {
                icon: "text-indigo-300",
                iconBg:
                  "radial-gradient(rgba(49, 46, 129, 0.7), transparent 75%)",
                line: "from-indigo-400 from-60% to-emerald-400",
              },
              timePeriod: "Mar 2018 – Oct 2020",
              title: "freeCodeCamp.org",
              subtitle: "Web development courses",
              content: (
                <>
                  <p className="mb-4">
                    <a
                      className="text-blue-300 transition-all hover:underline"
                      href="https://freecodecamp.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      freeCodeCamp
                    </a>{" "}
                    is an online learning platform that emphasizes learning by
                    doing. I completed the following certifications:
                  </p>
                  <div className="mb-2 flex flex-wrap items-center">
                    {[
                      {
                        name: "Responsive Web Design",
                        link: "https://www.freecodecamp.org/certification/pratvar/responsive-web-design",
                      },
                      {
                        name: "JavaScript Algorithms and Data Structures",
                        link: "https://www.freecodecamp.org/certification/pratvar/javascript-algorithms-and-data-structures",
                      },
                      {
                        name: "Front End Libraries",
                        link: "https://www.freecodecamp.org/certification/pratvar/front-end-libraries",
                      },
                      {
                        name: "Data Visualization",
                        link: "https://www.freecodecamp.org/certification/pratvar/data-visualization",
                      },
                      {
                        name: "APIs and Microservices",
                        link: "https://www.freecodecamp.org/certification/pratvar/apis-and-microservices",
                      },
                    ].map((el, i) => (
                      <a
                        key={i}
                        className="mb-2 mr-2 flex items-center space-x-2 rounded-full border border-indigo-950 px-3 py-1.5 text-sm text-indigo-50 transition-all hover:border-indigo-900 hover:bg-indigo-950 hover:text-white active:bg-indigo-900"
                        href={el.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{el.name}</span>
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                  <p>
                    Check out the{" "}
                    <a
                      className="text-blue-300 transition-all hover:underline"
                      href="https://pratv1.github.io/fCC-projects"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      projects
                    </a>{" "}
                    I built for these certifications.
                  </p>
                </>
              ),
            },
            {
              icon: <Briefcase className="relative h-6 w-6 lg:h-7 lg:w-7" />,
              colors: {
                icon: "text-emerald-300",
                iconBg: "radial-gradient(rgb(6, 78, 59, 0.7), transparent 75%)",
                line: "from-emerald-400 from-20% to-transparent to-90%",
              },
              timePeriod: "Nov 2020 – Present",
              title: "Bolt.Earth, Bengaluru (Remote)",
              subtitle: "Front-end developer",
              content: (
                <>
                  <p className="leading-relaxed">
                    I started out as an intern at Bolt.Earth, and was later
                    hired as a full-time employee. My main responsibilities
                    include:
                  </p>
                  <ul className="mt-1 list-inside list-disc">
                    {[
                      <>
                        Building the Bolt.Earth{" "}
                        <a
                          href="https://bolt.earth/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 transition-all hover:underline"
                        >
                          website
                        </a>{" "}
                        and{" "}
                        <a
                          href="https://console.bolt.earth/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 transition-all hover:underline"
                        >
                          web app
                        </a>
                        .
                      </>,
                      "Building HTML email templates for marketing campaigns.",
                      "Working with the design and backend teams to plan and implement new features.",
                      "Reviewing code and providing feedback to other developers.",
                    ].map((el, i) => (
                      <li key={i}>{el}</li>
                    ))}
                  </ul>
                </>
              ),
            },
          ].map((el, i, arr) => (
            <div key={i} className="flex items-stretch space-x-3 lg:space-x-4">
              <div className="flex w-6 flex-col items-center lg:w-7">
                <div className={cn("relative my-3", el.colors.icon)}>
                  <div
                    className="absolute left-1/2 top-1/2 z-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 lg:h-14 lg:w-14"
                    style={{ background: el.colors.iconBg }}
                  />
                  {el.icon}
                </div>
                <div
                  className={cn(
                    "h-full w-px rounded bg-gradient-to-b lg:w-[2px]",
                    el.colors.line,
                  )}
                />
              </div>
              <div
                className={cn(
                  "mt-3.5 max-w-4xl lg:mt-4",
                  i !== arr.length - 1 && "pb-12",
                )}
              >
                <div
                  className={cn("mb-4 text-sm font-semibold", el.colors.icon)}
                >
                  {el.timePeriod}
                </div>
                <div className="mb-5 flex flex-col space-y-1 lg:flex-row lg:items-stretch lg:space-x-2 lg:space-y-0 lg:text-lg">
                  <b className="font-bold">{el.title}</b>
                  {el.subtitle && (
                    <>
                      <span className="hidden border-l border-slate-600 lg:inline-block" />
                      <span className="text-slate-300">{el.subtitle}</span>
                    </>
                  )}
                </div>
                <div className="text-sm !leading-[1.8em] text-white lg:text-base">
                  {el.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="border-t border-zinc-900"
        style={{
          background: [
            "radial-gradient(at top left, rgba(120, 53, 15, 0.15), transparent 50%)",
          ].join(", "),
        }}
      >
        <div className="container py-14 lg:py-20">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-amber-300">
            Skills
          </div>
          <h3 className="mb-6 text-2xl font-bold sm:text-3xl lg:mb-10">
            Technologies I've Worked With
          </h3>
          <div className="flex flex-wrap text-sm">
            <div className="mr-3 flex items-center space-x-1.5">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-green-200">Proficient</span>
            </div>
            <div className="mr-3 flex items-center space-x-1.5">
              <div className="h-3 w-3 rounded-full bg-blue-500" />
              <span className="text-blue-200">Experienced</span>
            </div>
            <div className="mr-3 flex items-center space-x-1.5">
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="text-yellow-200">Familiar</span>
            </div>
          </div>
          {[
            {
              category: "Languages",
              items: {
                proficient: ["HTML", "CSS", "JavaScript"],
                experienced: ["TypeScript", "Bash"],
                familiar: ["PHP", "Python", "C++"],
              },
            },
            {
              category: "Frameworks & Libraries",
              items: {
                proficient: ["React", "Tailwind CSS", "MUI"],
                experienced: ["Next.js", "Google Maps API", "Strapi"],
                familiar: ["Vue", "Laravel", "Socket.IO"],
              },
            },
            {
              category: "Tools & Platforms",
              items: {
                proficient: ["VS Code"],
                experienced: [
                  "AWS: S3, CloudFront, Route 53, EC2",
                  "Git",
                  "Linux",
                  "Cloudflare",
                  "Figma",
                ],
                familiar: ["Firebase", "Adobe XD", "Jenkins"],
              },
            },
            {
              category: "Other",
              items: {
                proficient: ["Responsive Web Design"],
                experienced: [
                  "SEO",
                  "Progressive Web Apps",
                  "Web Accessibility",
                ],
                familiar: [],
              },
            },
          ].map((el, i) => (
            <div key={i} className={cn("mt-6", i === 0 && "lg:mt-8")}>
              <div className="font-semibold">{el.category}</div>
              <div className="mt-4 flex flex-wrap items-center text-sm">
                {Object.entries(el.items).map(([proficiency, list]) =>
                  list.map((item, i) => (
                    <div
                      key={i}
                      className={cn(
                        "mb-2 mr-2 cursor-default rounded-full border px-3 py-1.5 transition-all",
                        proficiency === "proficient" &&
                          "border-green-500/50 bg-green-950/40 hover:border-green-500 hover:bg-green-900",
                        proficiency === "experienced" &&
                          "border-blue-500/60 bg-blue-950/40 hover:border-blue-500 hover:bg-blue-900",
                        proficiency === "familiar" &&
                          "border-yellow-500/50 bg-yellow-950/40 hover:border-yellow-500 hover:bg-yellow-900",
                      )}
                    >
                      <span>{item}</span>
                    </div>
                  )),
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="border-t border-zinc-900"
        style={{
          background: [
            "radial-gradient(at top left, rgba(6, 78, 59, 0.15), transparent 50%)",
          ].join(", "),
        }}
      >
        <div className="container py-14 lg:py-20">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Projects
          </div>
          <h3 className="mb-6 text-2xl font-bold sm:text-3xl lg:mb-10">
            Some of My Work
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {[
              {
                title: "Bolt.Earth Website",
                link: "https://bolt.earth",
                thumbnail:
                  "/images/pages/home/bolt-earth-website-thumbnail.png",
                description:
                  "Built with Next.js and Tailwind CSS. Designed by the Bolt.Earth design team.",
              },
              {
                title: "freeCodeCamp Projects",
                link: "https://pratv1.github.io/fCC-projects",
                thumbnail: "/images/pages/home/fcc-projects-thumbnail.png",
                description:
                  "A collection of projects I built for the freeCodeCamp certifications.",
              },
            ].map((el, i) => (
              <div
                key={i}
                className="group h-full w-full overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={el.thumbnail}
                    alt={el.title}
                    className="relative h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute bottom-0 h-full w-full bg-gradient-to-t from-zinc-950 to-transparent to-50%" />
                </div>
                <div className="p-4 pb-8">
                  <a
                    className="flex w-fit items-center space-x-2 font-semibold hover:underline lg:text-lg"
                    href={el.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{el.title}</span>
                    <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4" />
                  </a>
                  <div className="mt-4 text-sm !leading-relaxed text-slate-300">
                    {el.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="recent-blog-posts"
        className="border-t border-zinc-900"
        style={{
          background: [
            "radial-gradient(at top left, rgba(30, 58, 138, 0.15), transparent 50%)",
          ].join(", "),
        }}
      >
        <div className="container py-14 lg:py-20">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-blue-300">
            Blog
          </div>
          <h3 className="mb-6 text-2xl font-bold sm:text-3xl lg:mb-10">
            My Recent Blog Posts
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {[
              {
                title:
                  "Full-page scroll animation with Framer Motion, React, and Tailwind CSS",
                link: "/blog/full-page-scroll-animation-with-framer-motion-react-and-tailwind-css",
                thumbnail:
                  "/images/pages/home/bolt-earth-website-thumbnail.png",
                description:
                  "Technical breakdown of Bolt.Earth's landing page animation.",
              },
            ].map((el, i) => (
              <div
                key={i}
                className="group h-full w-full overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={el.thumbnail}
                    alt={el.title}
                    className="relative h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute bottom-0 h-full w-full bg-gradient-to-t from-zinc-950 to-transparent to-50%" />
                </div>
                <div className="p-4 pb-8">
                  <Link
                    className="font-semibold hover:underline lg:text-lg"
                    href={el.link}
                  >
                    {el.title}
                  </Link>
                  <div className="mt-4 text-sm !leading-relaxed text-slate-300">
                    {el.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-zinc-900"
        style={{
          background: [
            "radial-gradient(at top left, rgba(22, 78, 99, 0.15), transparent 50%)",
          ].join(", "),
        }}
      >
        <div className="container py-14 lg:py-20">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            Contact
          </div>
          <h3 className="mb-6 text-2xl font-bold sm:text-3xl lg:mb-10">
            Get in Touch
          </h3>
          <p className="mb-6 text-sm !leading-relaxed lg:mb-8 lg:text-base">
            Feel free to contact me through any of the following channels:
          </p>
          <div className="flex flex-wrap">
            {[
              {
                icon: <Linkedin size={20} />,
                title: "LinkedIn",
                link: "https://linkedin.com/in/pratv",
              },
              {
                icon: <Github size={20} />,
                title: "GitHub",
                link: "https://github.com/pratv1",
              },
              {
                icon: <XLogo className="h-[20px] w-[20px]" />,
                title: "@pratvar",
                link: "https://x.com/pratvar",
              },
              {
                icon: <Mail size={20} />,
                title: "pratikvar@pm.me",
                link: "mailto:pratikvar@pm.me",
              },
            ].map((el, i) => (
              <a
                key={i}
                className="mb-2 mr-2 flex w-fit items-center space-x-2.5 rounded-full border border-zinc-900 px-3.5 py-2 transition-all hover:border-zinc-800 hover:bg-zinc-900 active:bg-zinc-800"
                href={el.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {el.icon || null}
                <span>{el.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
