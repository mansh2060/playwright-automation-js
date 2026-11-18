export async function home(page){
  await page.goto('https://theauthorizedpartner.com/',{
            waitUntil: 'domcontentloaded'
        })
  await page.getByRole('button',{name:'Get Started'}).nth(0).click();
  await page.getByRole('checkbox',{id:'remember'}).check();
  await page.locator('text=Continue').click();
}