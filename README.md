# similar-palette-generator

This package lets you generate a similar palette with random colors

## Usage

npm install @southerndevs/similar-palette-generator

```
import getRandomColors from "@southerndevs/similar-palette-generator"
const getRandomColors = require("@southerndevs/similar-palette-generator")
```

getRandomColors(["#4b5662", "#355c81", "#008aab", "#c9c9b9", "#333333"], 30)

| Parameters | Type   | Description                  | Required |
| ---------- | ------ | ---------------------------- | -------- |
| palette    | Array  | Array of hex colors          | true     |
| variation  | Number | Number of colors to generate | true     |

expected output example `[ '#395e72', '#326288', '#0a95b3', '#c6c8c2', '#173842' ]`

### You will need to provide a palette array with hex colors, and then set the variation you want to generate.

it will generate more similar colors the lower the number is
