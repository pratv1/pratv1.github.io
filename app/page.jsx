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

const Home = () => {
  return (
    <>
      <section className="relative border-b bg-gradient-to-r from-indigo-100 via-sky-100 to-emerald-100">
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-transparent to-slate-50 to-15%"></div>
        <div className="container relative max-w-screen-lg py-40 text-center">
          <h1 className="mt-10 text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl">
            Hello, I'm Pratik Var.
          </h1>
          <div className="mt-8 text-lg leading-relaxed text-slate-600">
            <p className="mb-3">
              I'm a 21-year-old self-taught{" "}
              <b className="font-medium text-slate-900">front-end developer</b>{" "}
              based in <b className="font-medium text-slate-900">India</b>, with
              a passion for creating beautiful, intuitive user experiences. I'm
              currently working at{" "}
              <a
                href="https://bolt.earth/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-900 underline decoration-slate-400 decoration-dotted underline-offset-2 hover:text-blue-600"
              >
                Bolt.Earth
              </a>
              , where I'm helping build India's largest EV charging network.
            </p>
            <p>
              My current go-to stack is{" "}
              <span className="font-medium text-slate-900">
                React (Next.js)
              </span>
              , <span className="font-medium text-slate-900">MUI</span>, and{" "}
              <span className="font-medium text-slate-900">Tailwind CSS</span>.
            </p>
          </div>
        </div>
        <button
          className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 translate-y-1/2 cursor-pointer items-center rounded-full bg-slate-700 px-4 py-2 text-sm font-semibold text-white shadow-xl transition-all hover:bg-slate-600 active:bg-slate-800"
          onClick={() => {
            const el = document.getElementById("background");
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

      <section id="background" className="relative">
        <div className="container absolute left-1/2 -translate-x-1/2 px-0">
          {/* Insert branch line SVG here */}
        </div>
        <div className="container py-24">
          <h3 className="mb-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Background and Work Experience
          </h3>
          <p className="mb-8 max-w-3xl text-slate-500">
            I was first introduced to HTML in 2016, when I was in 10th grade. I
            found it very fun to be able to write some code and see it render on
            the screen. I started learning more about HTML and CSS, and
            eventually JavaScript, and I've been hooked ever since.
          </p>

          <div className="flex items-stretch space-x-4">
            <div className="flex w-7 flex-col items-center">
              <div className="relative my-3 text-purple-500">
                <div
                  className="absolute left-1/2 top-1/2 z-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background:
                      "radial-gradient(rgb(250, 245, 255) 15%, transparent 75%)",
                  }}
                />
                <SchoolOutlined
                  color="inherit"
                  sx={{ fontSize: 28 }}
                  className="relative"
                />
              </div>
              <div className="h-full w-[2px] rounded bg-gradient-to-b from-purple-500 to-indigo-500" />
            </div>
            <div className="pb-12">
              <div className="mb-2 font-mono text-sm font-semibold text-purple-800">
                APR 2015 – APR 2019
              </div>
              <div className="text-lg text-slate-900">
                <b className="font-bold">Alwar Public School, Rajasthan</b>{" "}
                <span className="text-slate-600">
                  {" "}
                  — High School Diploma (CBSE)
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-stretch space-x-4">
            <div className="flex w-7 flex-col items-center">
              <div className="relative my-3 text-indigo-500">
                <div
                  className="absolute left-1/2 top-1/2 z-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background:
                      "radial-gradient(rgb(238, 242, 255) 15%, transparent 75%)",
                  }}
                />
                <Laptop
                  color="inherit"
                  sx={{ fontSize: 28 }}
                  className="relative"
                />
              </div>
              <div className="h-full w-[2px] rounded bg-gradient-to-b from-indigo-500 from-50% to-emerald-500 to-90%" />
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="pb-12">
                <div className="mb-2 font-mono text-sm font-semibold text-indigo-800">
                  MAY 2019 – OCT 2020
                </div>
                <div className="mb-4 text-lg text-slate-900">
                  <a
                    href="https://freecodecamp.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:text-blue-600"
                  >
                    freeCodeCamp.org
                  </a>{" "}
                  <span className="text-slate-600">
                    {" "}
                    — Web Development Courses
                  </span>
                </div>
                <div className="text-slate-500">
                  <p className="mb-4">
                    <b className="font-medium text-slate-900">freeCodeCamp</b>{" "}
                    is an online learning platform that puts an emphasis on
                    learning by doing. I completed the following certifications:
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
                        className="mb-2 mr-2 rounded-md border bg-gray-50 px-2 py-1 text-sm text-slate-900 shadow-sm transition-all hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-md"
                        href={el.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {el.name}
                      </a>
                    ))}
                  </div>
                  <p className="mb-2">
                    Check out the projects I built for them.
                  </p>
                </div>
              </div>
              <div className="h-full w-full rounded-xl bg-gray-50"></div>
            </div>
          </div>
          <div className="flex items-stretch space-x-4">
            <div className="flex w-7 flex-col items-center">
              <div className="relative my-3 text-emerald-500">
                <div
                  className="absolute left-1/2 top-1/2 z-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background:
                      "radial-gradient(rgb(236, 253, 245) 15%, transparent 75%)",
                  }}
                />
                <WorkOutline
                  color="inherit"
                  className="relative"
                  sx={{ fontSize: 28 }}
                />
              </div>
              <div className="h-full w-[2px] rounded-full bg-gradient-to-b from-emerald-500 to-transparent to-80%" />
            </div>
            <div>
              <div className="mb-2 font-mono text-sm font-semibold text-emerald-800">
                NOV 2020 – PRESENT
              </div>
              <div className="mb-4 text-lg text-slate-900">
                <b className="font-bold">Bolt.Earth, Bengaluru (Remote)</b>{" "}
                <span className="text-slate-600"> — Front-End Developer</span>
              </div>
              <div className="text-slate-500">
                <p className="leading-relaxed">
                  I started out as an intern at Bolt.Earth, and was later hired
                  as a full-time employee.
                  <br />
                  My main responsibilities include:
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
                    - Building email templates for marketing campaigns.
                  </li>
                  <li className="mb-1">
                    - Working with the design and backend teams to build new
                    features.
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
      {/* <section>
        <div className="container py-8"></div>
      </section> */}
    </>
  );
};

export default Home;
