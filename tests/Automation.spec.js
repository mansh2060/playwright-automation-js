import {test} from '@playwright/test'
import { home } from '../pages/homepage';

// clicking the get start button using playright web objects
test('homepage login',async ({page}) => {
  await home(page);
  
  await page.pause();
})