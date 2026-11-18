import { fillProfessionalExperience } from "./professionalexperience"

export  async function fillAgencyDetails(page) {

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


await page.pause();
  await fillProfessionalExperience(page);
}