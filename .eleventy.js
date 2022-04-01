const {inspect} = require("node:util");
const json5 = require("json5");

module.exports = eleventyConfig => {
  eleventyConfig.addDataExtension("json5", contents => json5.parse(contents));

  eleventyConfig.addFilter("inspect", value => inspect(value));

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
