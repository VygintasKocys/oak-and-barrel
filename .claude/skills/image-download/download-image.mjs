#!/usr/bin/env node

/**
 * Download an image, resize it, and convert to WebP.
 *
 * Usage: node download-image.mjs <url> <filename> <width> [height]
 *
 * Outputs JSON to stdout:
 *   { path, servePath, width, height, sizeKB }
 */

import { mkdir, writeFile, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const [, , url, filename, widthArg, heightArg] = process.argv;

if (!url || !filename || !widthArg) {
  console.error(
    "Usage: node download-image.mjs <url> <filename> <width> [height]"
  );
  process.exit(1);
}

const width = parseInt(widthArg, 10);
const height = heightArg ? parseInt(heightArg, 10) : undefined;

const outDir = join(process.cwd(), "public", "images");
await mkdir(outDir, { recursive: true });

const outPath = join(outDir, `${filename}.webp`);

// Download the image
const res = await fetch(url);
if (!res.ok) {
  console.error(`Failed to download image: ${res.status} ${res.statusText}`);
  process.exit(1);
}

const buffer = Buffer.from(await res.arrayBuffer());

// Resize and convert to WebP
const resizeOptions = {
  width,
  fit: "inside",
  withoutEnlargement: true,
};
if (height) {
  resizeOptions.height = height;
}

const result = await sharp(buffer)
  .resize(resizeOptions)
  .webp({ quality: 80 })
  .toFile(outPath);

const fileStat = await stat(outPath);
const sizeKB = Math.round((fileStat.size / 1024) * 10) / 10;

const output = {
  path: `public/images/${filename}.webp`,
  servePath: `/images/${filename}.webp`,
  width: result.width,
  height: result.height,
  sizeKB,
};

console.log(JSON.stringify(output, null, 2));
