function generateSimilarColor(color, variation) {
  // get RGB values from color
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  // generate random RGB mod variations
  const rMod = Math.floor(Math.random() * (variation * 2 + 1)) - variation;
  const gMod = Math.floor(Math.random() * (variation * 2 + 1)) - variation;
  const bMod = Math.floor(Math.random() * (variation * 2 + 1)) - variation;

  // calculate new RGB values
  const newR = Math.min(Math.max(r + rMod, 0), 255);
  const newG = Math.min(Math.max(g + gMod, 0), 255);
  const newB = Math.min(Math.max(b + bMod, 0), 255);

  // return new color in hex format
  return `#${newR.toString(16).padStart(2, "0")}${newG
    .toString(16)
    .padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
}

module.exports = generateSimilarColor;
