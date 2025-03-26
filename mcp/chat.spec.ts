import { test, expect } from '@playwright/test';
import { ask } from '../ai/ollama';

test('Pregunta a Ollama', async ({ page }) => {
  const respuesta = await ask("¿Qué es Playwright?");
  console.log("🤖 Respuesta:", respuesta);
  
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});