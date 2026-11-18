import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export async function verifPref(page) {
  await page.getByPlaceholder('Enter your registration number').fill('1234')
  await page.getByRole('combobox', { name: 'Preferred Countries' }).click();
  const country = page.getByRole('dialog').getByText('Australia', {
    exact: true
  });

  await country.click();
  await page.getByLabel('Colleges').check()
  await page.getByLabel('Vocational School').check()
  const documentPath = path.resolve(
    __dirname,
    '../test-data/Business Document.pdf'
  );

  await page.locator('input[type="file"]').first()
    .setInputFiles(documentPath);
  await page.getByRole('button',{name:'Submit'}).click()
  await page.pause();
}