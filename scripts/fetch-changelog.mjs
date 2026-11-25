import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const API_URL = process.env.CHANGELOG_API_URL ?? "http://39.105.55.81:3100/changelog";
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const targetFile = path.join(rootDir, "src/data/changelog.json");

function isEntry(value) {
  if (!value || typeof value !== "object") return false;
  return (
    typeof value.version === "string" &&
    (value.date === undefined || typeof value.date === "string") &&
    Array.isArray(value.items) &&
    value.items.every((item) => typeof item === "string")
  );
}

async function main() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(API_URL, { signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const payload = await response.json();
    if (!Array.isArray(payload?.entries) || !payload.entries.every(isEntry)) {
      throw new Error("unexpected response shape");
    }

    await mkdir(path.dirname(targetFile), { recursive: true });
    await writeFile(targetFile, `${JSON.stringify(payload.entries, null, 2)}\n`, "utf8");
    console.log(
      `[changelog] synced ${payload.entries.length} versions -> ${path.relative(rootDir, targetFile)}`,
    );
  } catch (error) {
    const hasSnapshot = await access(targetFile).then(
      () => true,
      () => false,
    );
    console.warn(`[changelog] sync failed: ${error.message}`);
    if (hasSnapshot) {
      console.warn("[changelog] keeping existing snapshot");
      return;
    }
    console.error("[changelog] no existing snapshot, cannot continue");
    process.exitCode = 1;
  } finally {
    clearTimeout(timer);
  }
}

await main();
