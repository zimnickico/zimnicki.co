import { DateTime } from "luxon"

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addPassthroughCopy("_styles/bundle.css");
  eleventyConfig.addPassthroughCopy("../../_styles/bundle.css");

  eleventyConfig.addPassthroughCopy({ "content": "/" });

}
