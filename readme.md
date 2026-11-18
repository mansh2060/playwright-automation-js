## Prerequisites :
-- 1.Add your first name,last name, email , password , phone number in register page 
-- 2.Add Agency Name,Agency Email Address,Website,Agency Address, Region of Operation
-- 3.Add Years of Experience and other details for Professional Experience and Verification 
Note: Demo information is already provided in the project to test the automation workflow.

### Running the Project
## .Type "npx playwright test tests/Automation.spec.js --project=chromium --headed"
from the project directory to run the project in Chrome with GUI.

## OTP Verification
1.Open the email inbox and manually fill the OTP 
2.Click Verify Code button
3.Click Resume Button From Playwright Inspector
4.On change of every page resume button needed to be press.


## Execution Flow
A. New User

Get Started (Button from home page is clicked) --> Register Page (All information is populated and next button is clicked) -> Email Otp Verification (Need to manually Enter the OTP) --> Click Verify Code manually --> Click Resume Button From Playwright Inspector (Populate the Page) 

B. Registered User

"npx playwright test tests/Automation.spec.js --project=chromium --headed" will complete the whole project automatically(No need to OTP Manual entry)

## Scripts
pages/
  1.  homepage.js --> Click get started button and initiate the process
  2.  registerpage.js --> Contains information about first name , last name , contact number , email address , password , confirm password
  3.  loginpage.js --> For registered user it contains the information about email address and password 
  4.  agencydetails.js --> Contains information about Agency name , website and other
  5.  verification.js --> Contains information about the document and other
test-data/
  1.  Contains document for verification.js
tests/
  1.  Automation.spec.js --> Initaialize the project throught calling home page and register page.


