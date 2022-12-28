const generateSimilarColor = require("./src/colorsGenerator");

const getRandomColors = (palette, variation) =>
  palette.map((color) => generateSimilarColor(color, variation));

module.exports = getRandomColors;
