// Sticky navbar: About (Intro, Work Experience), Projects, Contact
// Intro: Name, Title, Location, About Me
// Work Experience: Timeline of work experience
// Projects: List of projects
// Contact: Email, LinkedIn, Github, Resume

const Home = () => {
  return (
    <>
      <section>
        <div className="container max-w-screen-lg py-8 text-center">
          <h1 className="mt-32 text-6xl font-extrabold text-slate-900">
            Hello, I'm Pratik Var.
          </h1>
          <div className="mt-6 text-lg leading-relaxed text-slate-600">
            <p className="mb-3">
              I'm a 21-year-old self-taught{" "}
              <b className="font-medium">front-end developer</b>{" "}
              based in <b className="font-medium">India</b>, with
              a passion for creating beautiful, intuitive user experiences. I'm
              currently working at{" "}
              <a
                href="https://bolt.earth/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-500 hover:text-emerald-600"
              >
                Bolt.Earth
              </a>
              , where I'm helping to build India's largest EV charging network.
            </p>
            <p>
              My current go-to stack is{" "}
              <b className="font-medium">
                React (Next.js), MUI, and Tailwind CSS
              </b>
              .
            </p>
          </div>
        </div>

        <div className="container py-8">
          <h3 className="mb-6 text-xl font-bold text-gray-800">
            Background and Work Experience
          </h3>
          <div className="relative ml-1 border-l border-purple-300 pb-10 pl-3">
            <span className="absolute left-0 top-0 flex h-[28px] w-2 -translate-x-1/2 items-center bg-gray-50">
              <span className="h-2 w-full rounded-full border-2 border-purple-500" />
            </span>
            <h4 className="relative mb-2 w-fit rounded-md bg-gradient-to-r from-purple-200 to-transparent px-2.5 py-1 font-mono text-sm font-semibold uppercase ">
              <span className="absolute left-0 top-1/2 h-2 w-2 -translate-x-[4px] -translate-y-1/2 rotate-45 bg-purple-200" />
              Apr 2015 - Apr 2019
            </h4>
            <p>
              <span className="font-bold">Alwar Public School, Rajasthan</span>
              <i className="text-gray-500"> — High School Diploma (CBSE)</i>
            </p>
          </div>
          <div className="relative ml-1 border-l border-indigo-300 pb-10 pl-3">
            <span className="absolute left-0 top-0 flex h-[28px] w-2 -translate-x-1/2 items-center bg-gray-50">
              <span className="h-2 w-2 rounded-full border-2 border-indigo-500" />
            </span>
            <h4 className="relative mb-2 w-fit rounded-md bg-gradient-to-r from-indigo-200 to-transparent px-2.5 py-1 font-mono text-sm font-semibold uppercase">
              <span className="absolute left-0 top-1/2 h-2 w-2 -translate-x-[4px] -translate-y-1/2 rotate-45 bg-indigo-200" />
              May 2019 - Oct 2020
            </h4>
            <p className="mb-4">
              <a
                href="https://freecodecamp.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-blue-600"
              >
                freeCodeCamp.org
              </a>
              <i className="text-gray-500"> — Web Development Courses</i>
            </p>
            <p>
              <b className="font-medium">freeCodeCamp</b> is an online learning
              platform that puts emphasis on learning by doing.
              <br />
              Here are the certifications for the courses I completed:
            </p>
            <div className="my-2 flex flex-wrap items-center">
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
                  className="mb-2 mr-2 rounded-md border bg-white px-2 py-1 text-sm shadow-sm transition-all hover:border-gray-400 hover:shadow-md"
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {el.name}
                </a>
              ))}
            </div>
            <p className="mb-2">
              ... and here are some of the projects I built:
            </p>
            <div>{"< Add projects here >"}</div>
          </div>
          <div className="relative ml-1 pb-8 pl-3">
            <span className="absolute left-0 top-0 flex h-[28px] w-2 -translate-x-1/2 items-center bg-gray-50">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <h4 className="relative mb-2 w-fit rounded-md bg-gradient-to-r from-emerald-200 to-transparent px-2.5 py-1 font-mono text-sm font-semibold uppercase">
              <span className="absolute left-0 top-1/2 h-2 w-2 -translate-x-[4px] -translate-y-1/2 rotate-45 bg-emerald-200" />
              Nov 2020 - Present
            </h4>
            <p className="mb-4">
              <span className="font-bold">Bolt.Earth, Bengaluru (Remote)</span>
              <i className="text-gray-500"> — Front-End Developer</i>
            </p>
            <p>
              I started out as an intern at Bolt.Earth, and was later hired as a
              full-time employee.
              <br />
              My main responsibilities include:
            </p>
            <ul className="mt-1 list-inside">
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
      </section>
      {/* <section>
        <div className="container py-8"></div>
      </section> */}
    </>
  );
};

export default Home;
