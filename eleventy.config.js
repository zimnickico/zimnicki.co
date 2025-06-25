import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import markdownItAttrs from "markdown-it-attrs";
import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";
import eleventyFaviconPlugin from "eleventy-favicon";

export default function (eleventyConfig) {
  const markdown = markdownIt({ html: true })
    .use(markdownItAttrs)
    .use(markdownItFootnote);

  eleventyConfig.setInputDirectory("app");
  eleventyConfig.setLayoutsDirectory("../layouts");

  eleventyConfig.setLibrary("md", markdown);

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(eleventyFaviconPlugin);

  eleventyConfig.addPassthroughCopy("styles/global.css");
  eleventyConfig.addPassthroughCopy("styles/post.css");
  eleventyConfig.addPassthroughCopy("styles/override.css");

  eleventyConfig.addPassthroughCopy("public/interfaces");
  eleventyConfig.addPassthroughCopy("public/posts");
}

export const config = {
  dir: {
    includes: "_includes",
  },
};
