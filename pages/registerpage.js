import { loginPage } from './loginpage.js';
import { fillAgencyDetails } from './agencydetails.js';


export async function registerpage(page) {
  await page.click('id=_r_0_-form-item')
  await page.locator('id=_r_0_-form-item').fill('Manish')
  await page.locator('text=Last Name').click();
  await page.locator('text=Last Name').fill('Kumar')
  await page.locator('text=Email Address').fill('bellmark031@gmail.com')
  await page.locator('[id = "_r_4_-form-item"]').fill('9860059809')
  await page.locator('input[type="password"]').nth(0).fill('Man_1234');
  await page.locator('input[type="password"]').nth(1).fill('Man_1234');
  //await page.pause()
  const nextButton = page.getByRole('button', {
    name: 'Next',
    exact: true
  });

  await nextButton.click();

  console.log('Next button clicked');

  const alreadyRegistered = page.getByText(
  'User with this email already exists!',
  { exact: true }
);

const verifyCode = page.getByText('Verify Code', {
  exact: true
});

await Promise.race([
  alreadyRegistered.waitFor({ state: 'visible' }),
  verifyCode.waitFor({ state: 'visible' })
]);

if (await alreadyRegistered.isVisible().catch(() => false)) {
  console.log('Email already registered. Please use Login.');
  await page.getByText('Go to Login', { exact: true }).click();
  await loginPage(page);
  return;
}

if (await verifyCode.isVisible().catch(() => false)) {
  console.log('OTP screen displayed. Enter OTP manually.');

  await page.pause();
  

  // Verify that OTP verification succeeded and Agency Details appeared.
  await page.getByPlaceholder('Enter Agency Name').waitFor({
    state: 'visible',
    timeout: 30000
  });

  
  await fillAgencyDetails(page);
  }
} 