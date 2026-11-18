import { fillAgencyDetails } from "./agencydetails";
import { fillProfessionalExperience } from "./professionalexperience";
import { verifPref } from "./verification";

export async function loginPage(page) {

  const emailInput = page.locator('#email');

  console.log('Matching email fields:', await emailInput.count());

  await emailInput.waitFor({ state: 'visible' });

  await emailInput.fill('heroicmanish017@gmail.com');

  await page.locator('#password').fill('Man_1234');
  await page.getByRole('button',{name:'Log In'}).click();
  await page.waitForURL(url => {
    const step = url.searchParams.get('step');

    return (
      step === 'details' ||
      step === 'professional-experience' ||
      step === 'verification'
    );
  }, { timeout: 30000 });

  const currentUrl = new URL(page.url());
  const step = currentUrl.searchParams.get('step');

  console.log('Current step:', step);

  if (step === 'details') {
    await fillAgencyDetails(page);
  }
  else if (step === 'professional-experience') {
    await fillProfessionalExperience(page);
  }
  else if (step === 'verification') {
    await verifPref(page);
  }
 
  
}