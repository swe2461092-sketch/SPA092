import fs from "fs";
import path from "path";

const projectRoot = process.cwd();
const imageDir = path.join(projectRoot, "src092", "img", "foods");
const outputDir = path.join(projectRoot, "src092", "data");
const outputFile = path.join(outputDir, "images.json");

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function isImageFile(fileName) {
  return /\.(jpg|jpeg|png|webp)$/i.test(fileName);
}
// Зургийн нэрнээс food_code-г салгаж авах функц
function extractFoodCode(fileName) {
  // 1. Хэрэв стандарт зааврын дагуу 01_0106_001.jpg гэсэн нэртэй бол:
  const match = fileName.match(/^(\d{2}_\d{4})_\d{3}\.(jpg|jpeg|png|webp)$/i);
  if (match) return match[1];

  // 2. Хэрэв 1.jpg, 2.jpg, 3.jpg гэсэн нэртэй бол:
  // (Жишээ нь эдгээр зургуудыг "01_0106" кодолсон хүнсэнд зааж өгөх)
  if (/^[0-9]+\.(jpg|jpeg|png|webp)$/i.test(fileName)) {
    return "01_0106"; // Үүнийг өөрийн зураг харгалзах food_code-оор солино
  }

  return null;
}

function buildImageMap(files) {
  const imageMap = {};

  for (const file of files) {
    const foodCode = extractFoodCode(file);
    if (!foodCode) continue;

    if (!imageMap[foodCode]) {
      imageMap[foodCode] = [];
    }

    imageMap[foodCode].push(`img/foods/${file}`);
  }

  for (const foodCode of Object.keys(imageMap)) {
    imageMap[foodCode].sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true }),
    );
  }

  return imageMap;
}

function main() {
  if (!fs.existsSync(imageDir)) {
    console.error(`Image directory not found: ${imageDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(imageDir).filter(isImageFile);
  const imageMap = buildImageMap(files);

  ensureDirectoryExists(outputDir);
  fs.writeFileSync(outputFile, JSON.stringify(imageMap, null, 2), "utf-8");

  console.log(`Generated: ${outputFile}`);
  console.log(`Food codes with images: ${Object.keys(imageMap).length}`);
  console.log(`Total image files: ${files.length}`);
}
main();
