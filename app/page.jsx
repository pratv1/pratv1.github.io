// Sticky navbar: About (Intro, Work Experience), Projects, Contact
// Intro: Name, Title, Location, About Me
// Work Experience: Timeline of work experience
// Projects: List of projects
// Contact: Email, LinkedIn, Github, Resume
"use client";

import {
  KeyboardDoubleArrowDown,
  Laptop,
  SchoolOutlined,
  WorkOutline,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section className="relative bg-zinc-950">
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
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-transparent to-zinc-950 to-10%" />
        <div className="container relative max-w-screen-lg py-28 text-center md:py-40">
          <h1 className="text-4xl font-extrabold sm:mt-10 sm:text-5xl md:text-6xl">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
              Pratik Var.
            </span>
          </h1>
          <div className="mt-8 leading-relaxed text-slate-300 md:text-lg">
            <p className="mb-3">
              I'm a self-taught{" "}
              <b className="font-medium text-white">front-end developer</b>{" "}
              based in <b className="font-medium text-white">India</b>, with a
              passion for creating beautiful, intuitive user experiences. I'm
              currently working at{" "}
              <a
                href="https://bolt.earth/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline decoration-slate-500 decoration-dotted underline-offset-4 hover:text-blue-300"
              >
                Bolt.Earth
              </a>
              , where I'm helping build India's largest EV charging network.
            </p>
            <p>
              My current go-to stack is{" "}
              <span className="font-medium text-white">React (Next.js)</span>,{" "}
              <span className="font-medium text-white">MUI</span>, and{" "}
              <span className="font-medium text-white">Tailwind CSS</span>.
            </p>
          </div>
        </div>
        <button
          className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 translate-y-1/2 cursor-pointer items-center rounded-full border-2 border-white bg-white px-4 py-2 text-sm font-semibold text-black shadow-xl transition-all hover:bg-zinc-950 hover:text-white"
          onClick={() => {
            const el = document.getElementById(
              "background-and-work-experience",
            );
            window.scrollTo({ top: el.offsetTop + 20, behavior: "smooth" });
          }}
        >
          <KeyboardDoubleArrowDown
            color="inherit"
            sx={{ fontSize: 18, ml: -0.75, mr: 0.75 }}
          />
          Know more
        </button>
      </section>

      <section
        id="background-and-work-experience"
        className="border-t border-zinc-800 pt-4"
      >
        <div className="container py-20">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-blue-300">
            Background
          </div>
          <h3 className="mb-10 text-3xl font-extrabold sm:text-4xl">
            Education and Work Experience
          </h3>
          <div className="flex items-stretch space-x-4">
            <div className="flex w-7 flex-col items-center">
              <div className="relative my-3 text-purple-300">
                <div
                  className="absolute left-1/2 top-1/2 z-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background:
                      "radial-gradient(rgb(88, 28, 135), transparent 75%)",
                  }}
                />
                <SchoolOutlined
                  color="inherit"
                  sx={{ fontSize: 28 }}
                  className="relative"
                />
              </div>
              <div className="h-full w-[2px] rounded bg-gradient-to-b from-purple-400 from-70% to-indigo-400" />
            </div>
            <div className="max-w-2xl pb-14">
              <div className="mb-2 text-sm font-semibold text-purple-300">
                Apr 2015 – Apr 2019
              </div>
              <div className="mb-4 text-lg">
                <b className="font-bold">Alwar Public School, Rajasthan</b>{" "}
                <span className="text-gray-400">
                  {" "}
                  — Secondary School (CBSE 10+2)
                </span>
              </div>
              <p className="text-gray-300">
                I was first introduced to HTML in 2016, when I was in 10th
                grade. I found it very fun to be able to write some code and see
                it render on the screen. I started learning more about HTML and
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
                <Laptop
                  color="inherit"
                  sx={{ fontSize: 28 }}
                  className="relative"
                />
              </div>
              <div className="h-full w-[2px] rounded bg-gradient-to-b from-indigo-400 from-70% to-emerald-400" />
            </div>
            <div className="max-w-2xl pb-14">
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
                  learning platform that puts an emphasis on learning by doing.
                  I completed the following certifications:
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
                      className="mb-3 mr-3 rounded-full border border-zinc-700 bg-zinc-800 px-2 py-1 text-sm font-medium text-white transition-all  hover:bg-zinc-700"
                      href={el.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {el.name}
                    </a>
                  ))}
                </div>
                <p>
                  Check out some of the{" "}
                  <a
                    className="font-medium text-blue-500 hover:text-blue-600"
                    href="https://npc-prat.github.io/fCC-projects"
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
                <WorkOutline
                  color="inherit"
                  className="relative"
                  sx={{ fontSize: 28 }}
                />
              </div>
              <div className="h-full w-[2px] rounded-full bg-gradient-to-b from-emerald-400 from-20% to-transparent to-90%" />
            </div>
            <div className="max-w-2xl">
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
                      className="font-medium text-blue-500 hover:text-blue-600"
                    >
                      website
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://console.bolt.earth/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-500 hover:text-blue-600"
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

      <section className="border-t border-zinc-800">
        <div className="container py-20">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-amber-300">
            Skills
          </div>
          <h3 className="mb-10 text-3xl font-extrabold sm:text-4xl">
            Technologies I've Worked With
          </h3>
          <div>
            <span className="font-mono">{"< In Progress >"}</span>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="container py-20">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Projects
          </div>
          <h3 className="mb-8 text-3xl font-extrabold sm:text-4xl">
            Some of My Work
          </h3>
          <div>
            <span className="font-mono">{"< In Progress >"}</span>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="container py-20">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-rose-300">
            Contact
          </div>
          <h3 className="mb-10 text-3xl font-extrabold sm:text-4xl">
            Get In Touch
          </h3>
          <div className="flex items-center space-x-2">
            {[
              {
                name: "Email",
                link: "mailto:pratikvar@pm.me",
              },
              {
                name: "LinkedIn",
                link: "https://linkedin.com/in/pratv",
              },
              {
                name: "GitHub",
                link: "https://github.com/npc-prat",
              },
              {
                name: "Twitter",
                link: "https://twitter.com/pratvar",
              },
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
