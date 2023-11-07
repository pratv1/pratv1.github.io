import Link from "next/link";

export const metadata = {
  title: "Blog | Pratik V",
  description:
    "I write about front-end development and other things that interest me.",
};

const Page = () => {
  return (
    <>
      <section
        className="border-b border-zinc-900"
        style={{
          background: [
            "radial-gradient(at top, rgba(30, 58, 138, 0.15), transparent 50%)",
          ].join(", "),
        }}
      >
        <div className="container py-14 text-center lg:py-20">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="mt-6 text-sm text-slate-300 lg:mt-12 lg:text-base">
            I write about front-end development and other things that interest
            me.
          </p>
        </div>
      </section>
      <section
        className="min-h-screen"
        style={{
          background: [
            "radial-gradient(at top left, rgba(30, 41, 59, 0.15), transparent 50%)",
            "radial-gradient(at center right, rgba(30, 41, 59, 0.15), transparent 50%)",
            "radial-gradient(at bottom left, rgba(30, 41, 59, 0.15), transparent 50%)",
          ].join(", "),
        }}
      >
        <div className="container py-14 lg:py-16">
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
    </>
  );
};

export default Page;
