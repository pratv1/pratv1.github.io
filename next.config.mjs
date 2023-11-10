import createMDX from "@next/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // pageExtensions: ["js", "jsx", "mdx"],
  output: "export",
};

const rehypePrettyCodeOptions = {
  theme: "material-theme-darker",
  keepBackground: false,
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeSlug,
      rehypeAutolinkHeadings,
    ],
  },
});

export default withMDX(nextConfig);
