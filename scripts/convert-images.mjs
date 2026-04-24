import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = 'public/assets';

const subdirs = ['Cards', 'Carousel', 'Esterno', 'Suites'];

async function convertImage(inputPath, outputPath) {
  await sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath);
}

async function main() {
  for (const subdir of subdirs) {
    const dir = path.join(assetsDir, subdir);
    if (!fs.existsSync(dir)) continue;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.endsWith('.jpeg') || file.endsWith('.jpg')) {
        const inputPath = path.join(dir, file);
        const baseName = path.basename(file, path.extname(file));
        const outputPath = path.join(dir, `${baseName}.webp`);
        
        console.log(`Converting: ${file} -> ${baseName}.webp`);
        await convertImage(inputPath, outputPath);
      }
    }
  }
  console.log('Done!');
}

main();