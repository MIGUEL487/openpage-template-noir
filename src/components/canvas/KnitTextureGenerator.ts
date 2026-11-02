import * as THREE from 'three';

/**
 * Generates procedural knitted fabric textures (Normal and Bump maps)
 * using HTML5 Canvas rendering of interlocking cable/rib knit loops.
 */
export function createProceduralKnitTextures(): {
  normalMap: THREE.CanvasTexture;
  bumpMap: THREE.CanvasTexture;
  aoMap: THREE.CanvasTexture;
} {
  const size = 512;

  // 1. Bump Map Canvas
  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = size;
  bumpCanvas.height = size;
  const bumpCtx = bumpCanvas.getContext('2d')!;

  // Background base tone (neutral gray)
  bumpCtx.fillStyle = '#808080';
  bumpCtx.fillRect(0, 0, size, size);

  const rows = 32;
  const cols = 24;
  const cellW = size / cols;
  const cellH = size / rows;

  // Draw interlocking knit 'V' loops
  for (let r = 0; r < rows; r++) {
    const yCenter = r * cellH + cellH / 2;
    const isOddRow = r % 2 === 1;
    const xOffset = isOddRow ? cellW / 2 : 0;

    for (let c = -1; c <= cols + 1; c++) {
      const xCenter = c * cellW + xOffset;

      // Draw the left leg of the knit stitch
      const gradLeft = bumpCtx.createLinearGradient(
        xCenter - cellW * 0.4,
        yCenter - cellH * 0.4,
        xCenter,
        yCenter + cellH * 0.4
      );
      gradLeft.addColorStop(0, '#555555');
      gradLeft.addColorStop(0.4, '#EEEEEE');
      gradLeft.addColorStop(1, '#333333');

      bumpCtx.strokeStyle = gradLeft;
      bumpCtx.lineWidth = cellW * 0.28;
      bumpCtx.lineCap = 'round';
      bumpCtx.beginPath();
      bumpCtx.moveTo(xCenter - cellW * 0.35, yCenter - cellH * 0.4);
      bumpCtx.quadraticCurveTo(
        xCenter - cellW * 0.38,
        yCenter + cellH * 0.1,
        xCenter,
        yCenter + cellH * 0.38
      );
      bumpCtx.stroke();

      // Draw the right leg of the knit stitch
      const gradRight = bumpCtx.createLinearGradient(
        xCenter + cellW * 0.4,
        yCenter - cellH * 0.4,
        xCenter,
        yCenter + cellH * 0.4
      );
      gradRight.addColorStop(0, '#555555');
      gradRight.addColorStop(0.4, '#EEEEEE');
      gradRight.addColorStop(1, '#333333');

      bumpCtx.strokeStyle = gradRight;
      bumpCtx.lineWidth = cellW * 0.28;
      bumpCtx.lineCap = 'round';
      bumpCtx.beginPath();
      bumpCtx.moveTo(xCenter + cellW * 0.35, yCenter - cellH * 0.4);
      bumpCtx.quadraticCurveTo(
        xCenter + cellW * 0.38,
        yCenter + cellH * 0.1,
        xCenter,
        yCenter + cellH * 0.38
      );
      bumpCtx.stroke();
    }
  }

  // Add micro-noise for wool fiber fuzz
  const bumpImageData = bumpCtx.getImageData(0, 0, size, size);
  const bumpPixels = bumpImageData.data;
  for (let i = 0; i < bumpPixels.length; i += 4) {
    const noise = (Math.random() - 0.5) * 18;
    bumpPixels[i] = Math.min(255, Math.max(0, bumpPixels[i] + noise));
    bumpPixels[i + 1] = Math.min(255, Math.max(0, bumpPixels[i + 1] + noise));
    bumpPixels[i + 2] = Math.min(255, Math.max(0, bumpPixels[i + 2] + noise));
  }
  bumpCtx.putImageData(bumpImageData, 0, 0);

  // 2. Normal Map Canvas (Derived from Sobel filter on bump map)
  const normalCanvas = document.createElement('canvas');
  normalCanvas.width = size;
  normalCanvas.height = size;
  const normalCtx = normalCanvas.getContext('2d')!;
  const normalImageData = normalCtx.createImageData(size, size);
  const normalPixels = normalImageData.data;

  const strength = 2.2;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const xLeft = (x - 1 + size) % size;
      const xRight = (x + 1) % size;
      const yUp = (y - 1 + size) % size;
      const yDown = (y + 1) % size;

      const idxL = (y * size + xLeft) * 4;
      const idxR = (y * size + xRight) * 4;
      const idxU = (yUp * size + x) * 4;
      const idxD = (yDown * size + x) * 4;

      const dX = (bumpPixels[idxR] - bumpPixels[idxL]) / 255;
      const dY = (bumpPixels[idxD] - bumpPixels[idxU]) / 255;

      let nx = -dX * strength;
      let ny = -dY * strength;
      let nz = 1.0;

      const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
      nx /= len;
      ny /= len;
      nz /= len;

      const targetIdx = (y * size + x) * 4;
      normalPixels[targetIdx] = Math.floor((nx * 0.5 + 0.5) * 255);
      normalPixels[targetIdx + 1] = Math.floor((ny * 0.5 + 0.5) * 255);
      normalPixels[targetIdx + 2] = Math.floor((nz * 0.5 + 0.5) * 255);
      normalPixels[targetIdx + 3] = 255;
    }
  }
  normalCtx.putImageData(normalImageData, 0, 0);

  // 3. AO Map Canvas (Crevices are darkened)
  const aoCanvas = document.createElement('canvas');
  aoCanvas.width = size;
  aoCanvas.height = size;
  const aoCtx = aoCanvas.getContext('2d')!;
  const aoImageData = aoCtx.createImageData(size, size);
  const aoPixels = aoImageData.data;

  for (let i = 0; i < bumpPixels.length; i += 4) {
    const val = bumpPixels[i];
    // Dark areas get pushed darker
    const aoVal = Math.min(255, Math.floor(Math.pow(val / 255, 1.4) * 255));
    aoPixels[i] = aoVal;
    aoPixels[i + 1] = aoVal;
    aoPixels[i + 2] = aoVal;
    aoPixels[i + 3] = 255;
  }
  aoCtx.putImageData(aoImageData, 0, 0);

  // Create Three.js textures
  const bumpTexture = new THREE.CanvasTexture(bumpCanvas);
  bumpTexture.wrapS = THREE.RepeatWrapping;
  bumpTexture.wrapT = THREE.RepeatWrapping;
  bumpTexture.repeat.set(10, 14);

  const normalTexture = new THREE.CanvasTexture(normalCanvas);
  normalTexture.wrapS = THREE.RepeatWrapping;
  normalTexture.wrapT = THREE.RepeatWrapping;
  normalTexture.repeat.set(10, 14);

  const aoTexture = new THREE.CanvasTexture(aoCanvas);
  aoTexture.wrapS = THREE.RepeatWrapping;
  aoTexture.wrapT = THREE.RepeatWrapping;
  aoTexture.repeat.set(10, 14);

  return {
    normalMap: normalTexture,
    bumpMap: bumpTexture,
    aoMap: aoTexture,
  };
}
