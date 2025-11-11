export default function (eleventyConfig) {
  // eleventyConfig.config
  eleventyConfig.setIncludesDirectory("layouts");
  eleventyConfig.addPassthroughCopy("public/*.png");
  eleventyConfig.addPassthroughCopy("bundle.css");
}
