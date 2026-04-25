const fs = require("fs");

// read SRT file
const input = fs.readFileSync("input.srt", "utf-8");

// process lines
const captions = input
  .split("\n")
  .filter((line) => {
    line = line.trim();
    return (
      line &&
      !/^\d+$/.test(line) && // remove numbers
      !line.includes("-->") // remove timestamps
    );
  })
  .join(" ")
  .replace(/\s+/g, " ") // clean extra spaces
  .trim();

// write to txt file
fs.writeFileSync("output.txt", captions);

console.log("✅ Captions saved to output.txt");
