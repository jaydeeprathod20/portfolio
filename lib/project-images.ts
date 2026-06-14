import fs from "fs";
import path from "path";
import type { CaseStudyImage } from "@/types";

const PUBLIC_PROJECTS_ROOT = path.join(
  process.cwd(),
  "public",
  "assets",
  "projects"
);

const IMAGE_EXTENSIONS = new Set([".png", ".webp", ".jpg", ".jpeg"]);
const MIN_FILE_SIZE = 1024;

const HERO_PRIORITY = [
  "dashboard",
  "optimize-route",
  "tracking",
  "marketplace",
  "rfq",
  "login",
  "hero",
];

function humanizeFilename(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function imageSortScore(filename: string): number {
  const lower = filename.toLowerCase();
  for (let index = 0; index < HERO_PRIORITY.length; index++) {
    if (lower.includes(HERO_PRIORITY[index])) return index;
  }
  return HERO_PRIORITY.length + lower.localeCompare("");
}

export function getProjectAssetFolders(): string[] {
  if (!fs.existsSync(PUBLIC_PROJECTS_ROOT)) return [];

  return fs
    .readdirSync(PUBLIC_PROJECTS_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

export function getProjectImagesFromFolder(
  folderName: string,
  projectTitle?: string
): CaseStudyImage[] {
  const directory = path.join(PUBLIC_PROJECTS_ROOT, folderName);
  if (!fs.existsSync(directory)) return [];

  const files = fs
    .readdirSync(directory)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .filter((file) => {
      const filePath = path.join(directory, file);
      return fs.statSync(filePath).size >= MIN_FILE_SIZE;
    })
    .sort((a, b) => imageSortScore(a) - imageSortScore(b));

  return files.map((file) => ({
    src: `/assets/projects/${folderName}/${file}`,
    alt: `${projectTitle ?? humanizeFilename(folderName)} — ${humanizeFilename(file)}`,
    label: humanizeFilename(file),
  }));
}

export function getProjectHeroImage(
  folderName: string,
  projectTitle?: string
): string {
  const images = getProjectImagesFromFolder(folderName, projectTitle);
  return images[0]?.src ?? "";
}

export function hasProjectScreenshots(folderName: string): boolean {
  return getProjectImagesFromFolder(folderName).length > 0;
}
