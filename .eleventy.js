const fs = require("fs");
const path = require("path");

module.exports = (function (eleventyConfig) {
  eleventyConfig.addFilter("fileSize", (fileUrlPath) => {
    const filePath = path.resolve(`.${fileUrlPath}`);
    return getFileSizeKb(filePath);
  });
});

/**
 * @param {string} filePath
 * @returns {string}
 */
function getFileSizeKb(filePath) {
  const stat = fs.statSync(filePath);
  if (!stat) {
    return "N/A";
  }

  return `${(stat.size / 1024).toFixed(2)} KB`;
}
