const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Aumentar o tamanho do viewport para Desktop
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  const baseUrl = 'http://localhost:4173';
  
  const pagesToCapture = [
    { route: '/', filename: 'paginainicial.png' },
    { route: '/contact', filename: 'contatos.png' },
    { route: '/experience', filename: 'experiencia.png' },
    { route: '/projects', filename: 'projetos.png' }
  ];

  for (const { route, filename } of pagesToCapture) {
    console.log(`Capturing ${route}...`);
    await page.goto(`${baseUrl}${route}`);
    // Wait for network to be idle so images and fonts load
    await page.waitForLoadState('networkidle');
    const filepath = path.resolve('../img', filename);
    await page.screenshot({ path: filepath, fullPage: true });
    console.log(`Saved to ${filepath}`);
  }

  await browser.close();
  console.log('All screenshots captured!');
})();
