/**
 * Regenerate WebP from public/showcase-src.jpg — same pixels, no resize.
 * JPEG fallback is a byte copy of the source (no re-encoding).
 */
import sharp from "sharp";
import { copyFileSync, readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "public/showcase-src.jpg");

const buf = readFileSync(src);
const meta = await sharp(buf).metadata();

await sharp(buf).webp({ quality: 95, effort: 6 }).toFile(join(root, "public/showcase-smart-planner.webp"));

copyFileSync(src, join(root, "public/showcase-smart-planner.jpg"));

console.log(
  `OK: ${meta.width}x${meta.height} → .webp (q95) + .jpg (copy of showcase-src.jpg)`,
);
