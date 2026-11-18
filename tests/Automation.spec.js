import {test} from '@playwright/test'
import { home } from '../pages/homepage';
import { registerpage } from '../pages/registerpage';


// clicking the get start button using playright web objects
test('homepage login',async ({page}) => {
  await home(page);
  await registerpage(page);
  
  await page.pause();
})