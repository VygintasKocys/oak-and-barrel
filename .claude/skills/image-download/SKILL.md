---
name: image-download
description: Download a stock image, resize it, convert to WebP, and save to public/images/ for local serving
disable-model-invocation: true
allowed-tools: Bash(node *)
---

# image-download

Download, resize, and convert images to WebP for local serving.

## Arguments

Parse the following from the user's free-form input:

- `<url>` (required) — the image URL to download
- `--name <filename>` (optional) — output filename without extension. Default: derived from the URL (last path segment, stripped of extension)
- `--width <px>` (optional) — target width in pixels. Default: 800
- `--height <px>` (optional) — target height in pixels. Default: auto (preserve aspect ratio)

## Instructions

1. Parse the arguments from the user's input.
2. Run the helper script:

```
node .claude/skills/image-download/download-image.mjs "<url>" "<filename>" <width> [<height>]
```

3. Parse the JSON output from stdout.
4. Report the result to the user:
   - Local file path (e.g. `public/images/hero-dish.webp`)
   - Serve path (e.g. `/images/hero-dish.webp`)
   - Final dimensions (width x height)
   - File size in KB
5. Suggest updating any component `src` props that reference the original URL to use the local serve path instead (e.g. `src="/images/hero-dish.webp"`).
