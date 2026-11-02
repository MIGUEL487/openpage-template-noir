import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('C:/Users/Windows/.gemini/antigravity/scratch/barbearia-template/template-barbearia-cliente/node_modules/playwright-core');

const SCREENSHOT_DIR = 'C:/Users/Windows/.gemini/antigravity/scratch/openpage-template-noir/screenshots';
fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

async function runQA() {
  console.log('🚀 Running fast visual capture...');
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
  });

  const targetUrl = 'https://openpage-template-noir.mi-c-openheimer.workers.dev';

  // Desktop
  console.log('📸 Desktop Viewport...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5,
  });
  const page = await desktopContext.newPage();
  await page.goto(targetUrl, { waitUntil: 'load', timeout: 25000 });
  await page.waitForTimeout(2500);

  // 1. Hero
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '01-desktop-hero.png'),
    animations: 'disabled',
    timeout: 8000,
  });
  console.log('✓ 01-desktop-hero.png');

  // 2. 3D Section
  await page.evaluate(() => window.scrollTo(0, 1500));
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '02-desktop-3d-section.png'),
    animations: 'disabled',
    timeout: 8000,
  });
  console.log('✓ 02-desktop-3d-section.png');

  // 3. Catalog Section
  await page.evaluate(() => window.scrollTo(0, 3600));
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '03-desktop-catalog.png'),
    animations: 'disabled',
    timeout: 8000,
  });
  console.log('✓ 03-desktop-catalog.png');

  await desktopContext.close();

  // Mobile
  console.log('📸 Mobile Viewport...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(targetUrl, { waitUntil: 'load', timeout: 25000 });
  await mobilePage.waitForTimeout(2500);

  // Mobile Hero
  await mobilePage.screenshot({
    path: path.join(SCREENSHOT_DIR, '04-mobile-hero.png'),
    animations: 'disabled',
    timeout: 8000,
  });
  console.log('✓ 04-mobile-hero.png');

  // Mobile Catalog
  await mobilePage.evaluate(() => window.scrollTo(0, 3200));
  await mobilePage.waitForTimeout(1200);
  await mobilePage.screenshot({
    path: path.join(SCREENSHOT_DIR, '05-mobile-catalog.png'),
    animations: 'disabled',
    timeout: 8000,
  });
  console.log('✓ 05-mobile-catalog.png');

  await mobileContext.close();
  await browser.close();

  console.log('🎉 Fast visual capture completed successfully!');
}

runQA().catch((err) => {
  console.error('QA Failed:', err);
  process.exit(1);
});
