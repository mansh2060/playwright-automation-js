import {test} from '@playwright/test'


// clicking the get start button using playright web objects
test('homepage login',async ({page}) => {
  await page.goto('https://authorized-partner.vercel.app/')
  await page.getByRole('button',{name:'Get Started'}).nth(0).click();
  await page.getByRole('checkbox',{id:'remember'}).check();
  await page.locator('text=Continue').click();
  await page.pause();
})