
import { verifPref } from "./verification"


export async function fillProfessionalExperience(page) {
  await page.getByRole('combobox', { name: 'Years of Experience' }).click();
  await page.getByRole('option', { name: '5 years', exact: true }).click();
  await page.getByPlaceholder('Enter an approximate number.').fill('500')
  await page.getByRole('textbox', { name: 'Focus Area' }).fill('Undergraduate admissions to Canada.');
  await page.getByPlaceholder('E.g., 90% ').fill('90')
  await page.getByLabel('Admission Applications').check()
  await page.getByLabel('Test Prepration').check()
  await page.getByRole('button',{name:'Next'}).click()
  await verifPref(page);
}
