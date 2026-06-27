import sharp from 'sharp';

const source = 'src/assets/profile-image.png';
const webpTarget = 'src/assets/profile-image.webp';
const avifTarget = 'src/assets/profile-image.avif';

await sharp(source).resize({ width: 960, withoutEnlargement: true }).webp({ quality: 78, effort: 6 }).toFile(webpTarget);

await sharp(source).resize({ width: 960, withoutEnlargement: true }).avif({ quality: 52, effort: 6 }).toFile(avifTarget);

const [webpMeta, avifMeta] = await Promise.all([sharp(webpTarget).metadata(), sharp(avifTarget).metadata()]);

console.log(`created ${webpTarget} (${webpMeta.width}x${webpMeta.height})`);
console.log(`created ${avifTarget} (${avifMeta.width}x${avifMeta.height})`);
