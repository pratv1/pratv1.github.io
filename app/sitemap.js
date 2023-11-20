export default function sitemap() {
  return [
    {
      url: "https://pratv1.github.io",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://pratv1.github.io/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://pratv1.github.io/blog/full-page-scroll-animation-with-framer-motion-react-and-tailwind-css",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}
