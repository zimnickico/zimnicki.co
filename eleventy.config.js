export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_styles/bundle.css");
  eleventyConfig.addPassthroughCopy("../../_styles/bundle.css");
};
