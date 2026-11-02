import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('C:/Users/Windows/.gemini/antigravity/scratch/barbearia-template/template-barbearia-cliente/node_modules/playwright-core');

const SCREENSHOT_DIR = 'C:/Users/Windows/.gemini/antigravity/scratch/openpage-template-noir/screenshots';
fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

async function runQA() {
  console.log('🚀 Running Luxury Fashion Visual Capture...');
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
  });

  const targetUrl = 'https://openpage-template-noir.mi-c-openheimer.workers.dev';

  // --- 1. Desktop (1440x900) ---
  console.log('📸 Desktop Viewport (1440x900)...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5,
  });
  const page = await desktopContext.newPage();
  await page.goto(targetUrl, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(2500);

  // 1. Hero Campaign
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '01-desktop-hero-campaign.png'),
    animations: 'disabled',
    timeout: 8000,
  });
  console.log('✓ 01-desktop-hero-campaign.png');

  // 2. Manifesto
  await page.evaluate(() => {
    document.querySelector('#manifesto')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '02-desktop-manifesto.png'),
    animations: 'disabled',
    timeout: 8000,
  });
  console.log('✓ 02-desktop-manifesto.png');

  // 3. Runway Campaign Highlight
  await page.evaluate(() => {
    document.querySelector('#campanha')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '03-desktop-runway-campaign.png'),
    animations: 'disabled',
    timeout: 8000,
  });
  console.log('✓ 03-desktop-runway-campaign.png');

  // 4. Lookbook
  await page.evaluate(() => {
    document.querySelector('#lookbook')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '04-desktop-lookbook.png'),
    animations: 'disabled',
    timeout: 8000,
  });
  console.log('✓ 04-desktop-lookbook.png');

  // 5. Luxury Catalog
  await page.evaluate(() => {
    document.querySelector('#catalogo')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '05-desktop-catalog-luxury.png'),
    animations: 'disabled',
    timeout: 8000,
  });
  console.log('✓ 05-desktop-catalog-luxury.png');

  await desktopContext.close();

  // --- 2. Mobile Viewport (iPhone: 390x844) ---
  console.log('📸 Mobile Viewport (390x844)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(targetUrl, { waitUntil: 'load', timeout: 30000 });
  await mobilePage.waitForTimeout(2500);

  // Mobile Hero
  await mobilePage.screenshot({
    path: path.join(SCREENSHOT_DIR, '06-mobile-hero.png'),
    animations: 'disabled',
    timeout: 8000,
  });
  console.log('✓ 06-mobile-hero.png');

  // Mobile Campaign Highlight
  await mobilePage.evaluate(() => {
    document.querySelector('#campanha')?.scrollIntoView({ behavior: 'instant' });
  });
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({
    path: path.join(SCREENSHOT_DIR, '07-mobile-campaign.png'),
    animations: 'disabled',
    timeout: 8000,
  });
  console.log('✓ 07-mobile-campaign.png');

  // Mobile Catalog
  await mobilePage.evaluate(() => {
    document.querySelector('#catalogo')?.scrollIntoView({ behavior: 'instant' });
  });
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({
    path: path.join(SCREENSHOT_DIR, '08-mobile-catalog.png'),
    animations: 'disabled',
    timeout: 8000,
  });
  console.log('✓ 08-mobile-catalog.png');

  await mobileContext.close();
  await browser.close();

  console.log('🎉 ALL LUXURY FASHION SCREENSHOTS CAPTURED SUCCESSFULLY');
}

runQA().catch((err) => {
  console.error('QA Failed:', err);
  process.exit(1);
});
