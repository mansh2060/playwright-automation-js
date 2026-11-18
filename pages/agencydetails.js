import { fillProfessionalExperience } from "./professionalexperience"

export  async function fillAgencyDetails(page) {

  console.log('Current URL:', page.url());

  console.log(
    'Current heading:',
    await page.locator('h3').allTextContents()
  );

  await page.getByPlaceholder('Enter Agency Name').fill('ABC Agency')
  await page.getByPlaceholder('Enter Your Role in Agency').fill('CEOO')
  await page.getByPlaceholder('Enter Your Agency Email Address').fill('bellmark032@gmail.com')
  await page.getByLabel('Website').fill('www.google.com')
  await page.getByPlaceholder('Enter Your Agency Address').fill('Kathmandu')
  await page.locator('button[role="combobox"]').click();
  await page.getByRole('dialog').getByText('Nepal', { exact: true }).click();
  await page.getByRole('button',{name:'Next'}).click()
  await page.getByRole('button', { name: 'Next' }).click();

console.log('URL after Next:', page.url());

await page.waitForTimeout(3000);

console.log('Page title:', await page.title());
console.log('Body text:', await page.locator('body').innerText());

await page.screenshot({
  path: 'professional-experience-debug.png',
  fullPage: true
});

await page.pause();
  await fillProfessionalExperience(page);
}