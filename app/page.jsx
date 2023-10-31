"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import {
  Briefcase,
  ChevronsDown,
  ExternalLink,
  GraduationCap,
  Laptop,
} from "lucide-react";

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
          <motion.div
            className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950"
            animate={{
              x: ["0%", "100%"],
              opacity: [1, 0.5, 1],
              transition: {
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              },
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950"
            animate={{
              scaleX: 1.001, // Prevents gap between the two gradients
              x: ["-100%", "0%"],
              opacity: [1, 0.5, 1],
              transition: {
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              },
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-transparent to-zinc-950 to-10%" />

        <div className="container relative max-w-screen-lg py-28 text-center md:py-40">
          <h1 className="text-4xl font-extrabold sm:mt-10 sm:text-5xl md:text-6xl">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
              Pratik V.
            </span>
          </h1>
          <div className="mx-auto mt-10 max-w-4xl !leading-loose text-slate-300 md:text-lg">
            <p>
              I'm a{" "}
              <b className="font-medium text-white">front-end developer</b>{" "}
              based in <b className="font-medium text-white">Bengaluru</b>, and
              I'm passionate about building beautiful and intuitive user
              experiences. I'm currently working at{" "}
              <a
                href="https://bolt.earth/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline decoration-white/50 decoration-dotted underline-offset-4 transition-all hover:text-green-300 hover:decoration-green-300/50"
              >
                Bolt.Earth
              </a>
              , where I'm helping enable India's largest EV charging network.
            </p>
            <p className="mt-4">
              My current go-to stack is{" "}
              <span className="font-medium text-white">React with Next.js</span>{" "}
              and <span className="font-medium text-white">Tailwind CSS</span>.
            </p>
          </div>
        </div>
        <button
          className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 translate-y-1/2 cursor-pointer items-center rounded-full border-2 border-white bg-white px-4 py-2 text-sm font-semibold text-black shadow-xl transition-all hover:bg-zinc-950 hover:text-white"
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

      <section id="about" className="border-t border-zinc-900 pt-4">
        <div className="container py-20">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-blue-300">
            Background
          </div>
          <h3 className="mb-6 text-2xl font-bold sm:text-3xl lg:mb-10">
            Education and Work Experience
          </h3>
          <div className="flex items-stretch space-x-4">
            <div className="flex w-7 flex-col items-center">
              <div className="relative my-3 text-purple-300">
                <div
                  className="absolute left-1/2 top-1/2 z-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background:
                      "radial-gradient(rgb(88, 28, 135, 0.7), transparent 75%)",
                  }}
                />
                <GraduationCap className="relative" size={28} />
              </div>
              <div className="h-full w-[2px] rounded bg-gradient-to-b from-purple-400 from-60% to-indigo-400" />
            </div>
            <div className="mt-4 max-w-2xl pb-14">
              <div className="mb-2 text-sm font-semibold text-purple-300">
                Apr 2015 – Apr 2019
              </div>
              <div className="mb-4 text-lg">
                <b className="font-bold">Alwar Public School, Rajasthan</b>{" "}
                <span className="text-gray-400">
                  {" "}
                  — Secondary School (CBSE India)
                </span>
              </div>
              <p className="text-gray-300">
                I was first introduced to HTML in 2016 when I was in 10th grade.
                I found it very fun to be able to write some code and see it
                render on the screen. I started learning more about HTML and
                CSS, and eventually JavaScript, and I've been hooked ever since.
              </p>
            </div>
          </div>
          <div className="flex items-stretch space-x-4">
            <div className="flex w-7 flex-col items-center">
              <div className="relative my-3 text-indigo-300">
                <div
                  className="absolute left-1/2 top-1/2 z-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background:
                      "radial-gradient(rgb(49, 46, 129), transparent 75%)",
                  }}
                />
                <Laptop className="relative" size={28} />
              </div>
              <div className="h-full w-[2px] rounded bg-gradient-to-b from-indigo-400 from-60% to-emerald-400" />
            </div>
            <div className="mt-4 max-w-2xl pb-14">
              <div className="mb-2 text-sm font-semibold text-indigo-300">
                May 2019 – Oct 2020
              </div>
              <div className="mb-4 text-lg">
                <a
                  href="https://freecodecamp.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:text-blue-600"
                >
                  freeCodeCamp.org
                </a>{" "}
                <span className="text-gray-400">
                  {" "}
                  — Web Development Courses
                </span>
              </div>
              <div className="text-gray-300">
                <p className="mb-4">
                  <b className="font-medium">freeCodeCamp</b> is an online
                  learning platform that emphasizes learning by doing. I
                  completed the following certifications:
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
                      className="mb-2 mr-2 flex items-center space-x-2 rounded-full border border-zinc-800 px-3 py-1.5 text-sm text-gray-300 transition-all hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
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
              </div>
            </div>
          </div>
          <div className="flex items-stretch space-x-4">
            <div className="flex w-7 flex-col items-center">
              <div className="relative my-3 text-emerald-300">
                <div
                  className="emeral absolute left-1/2 top-1/2 z-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background:
                      "radial-gradient(rgb(6, 78, 59), transparent 75%)",
                  }}
                />
                <Briefcase className="relative" size={28} />
              </div>
              <div className="h-full w-[2px] rounded-full bg-gradient-to-b from-emerald-400 from-20% to-transparent to-90%" />
            </div>
            <div className="mt-4 max-w-2xl">
              <div className="mb-2 text-sm font-semibold text-emerald-300">
                Nov 2020 – Present
              </div>
              <div className="mb-4 text-lg">
                <b className="font-bold">Bolt.Earth, Bengaluru (Remote)</b>{" "}
                <span className="text-gray-400"> — Front-End Developer</span>
              </div>
              <div className="text-gray-300">
                <p className="leading-relaxed">
                  I started out as an intern at Bolt.Earth, and was later hired
                  as a full-time employee. My main responsibilities include:
                </p>
                <ul className="mt-2 list-inside">
                  <li className="mb-1">
                    - Building and maintaining the Bolt.Earth{" "}
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
                  </li>
                  <li className="mb-1">
                    - Building HTML email templates for marketing campaigns.
                  </li>
                  <li className="mb-1">
                    - Working with the design and backend teams to plan and
                    implement new features.
                  </li>
                  <li className="mb-1">
                    - Reviewing code and providing feedback to other developers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900">
        <div className="container py-20">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-amber-300">
            Skills
          </div>
          <h3 className="mb-6 text-2xl font-bold sm:text-3xl lg:mb-10">
            Technologies I've Worked With
          </h3>
          <div>
            <span className="font-mono">{"< In Progress >"}</span>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-zinc-900">
        <div className="container py-20">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Projects
          </div>
          <h3 className="mb-6 text-2xl font-bold sm:text-3xl lg:mb-10">
            Some of My Work
          </h3>
          <div>
            <span className="font-mono">{"< In Progress >"}</span>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900">
        <div className="container py-20">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-rose-300">
            Contact
          </div>
          <h3 className="mb-6 text-2xl font-bold sm:text-3xl lg:mb-10">
            Get in Touch
          </h3>
          <div className="flex items-center space-x-2">
            {[
              { name: "Email", link: "mailto:pratikvar@pm.me" },
              { name: "LinkedIn", link: "https://linkedin.com/in/pratv" },
              { name: "GitHub", link: "https://github.com/pratv1" },
              { name: "Twitter", link: "https://twitter.com/pratvar" },
            ].map((el, i) => (
              <a
                key={i}
                className="flex items-center rounded-full border border-zinc-700 px-3 py-1 transition-all"
                href={el.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-medium ">{el.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
