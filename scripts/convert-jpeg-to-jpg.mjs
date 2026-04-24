import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = 'public/assets';

const subdirs = ['Cards', 'Carousel', 'Esterno', 'Suites'];

async function convertToJpeg(inputPath, outputPath) {
  await sharp(inputPath)
    .jpeg({ quality: 90 })
    .toFile(outputPath);
}

async function main() {
  for (const subdir of subdirs) {
    const dir = path.join(assetsDir, subdir);
    if (!fs.existsSync(dir)) continue;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.endsWith('.jpeg')) {
        const inputPath = path.join(dir, file);
        const baseName = path.basename(file, '.jpeg');
        const outputPath = path.join(dir, `${baseName}.jpg`);
        
        if (!fs.existsSync(outputPath)) {
          console.log(`Converting: ${file} -> ${baseName}.jpg`);
          await convertToJpeg(inputPath, outputPath);
        } else {
          console.log(`Skipping ${file} (already exists)`);
        }
        fs.unlinkSync(inputPath);
      }
    }
  }
  console.log('Done!');
}

main();