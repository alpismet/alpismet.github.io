const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  // Custom Filters
  const CleanCSS = require("clean-css");

  eleventyConfig.addFilter("machineDate", (dateObj) =>
    new Date(dateObj).toISOString().split("T")[0]
  );

  eleventyConfig.addFilter("readableDate", (dateObj) =>
    new Date(dateObj).toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  );

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // 🧩 Navigation Plugin
  eleventyConfig.addPlugin(pluginNavigation);

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};