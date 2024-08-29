# SIN Validator Assessment

This project is a Social Insurance Number (SIN) Validator built with Next.js 14 and TypeScript. The app lets users enter a SIN and checks if it’s valid using a special math formula called the Luhn Algorithm.


## Live Demo

The project is deployed on Vercel and can be accessed at:
[https://sin-validator-vert.vercel.app/](https://sin-validator-vert.vercel.app/)

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**:
   git clone https://github.com/yourusername/sin-validator.git
   cd sin-validator
   or use github desktop
Install Dependencies: Install the required packages:

npm install

2. **Start the Development Server**:

npm run dev
Open the App: Go to http://localhost:3000 in your web browser. You will see the SIN Validator interface.

## Project Structure:
Here’s an overview of the key files and folders in this project:

sin-validator/
├── src/
│   ├── app/
│   │   └── index.tsx              # Main page of the app
│   ├── utils/
│   │   ├── validateSIN.ts         # Function to check if SIN is valid
│   │   └── validateSIN.test.ts    # Tests for the validateSIN function
├── public/                        # Static files like images
├── jest.config.js                 # Configuration for running tests
├── tsconfig.json                  # TypeScript settings
└── package.json                   # Project info and scripts

## Explanation:
src/app/page.tsx: This is the main page of the app where users can enter their SIN and get results. It also includes a check to ensure the SIN is exactly 9 digits long before attempting to validate it. This is a sanity check to prevent unnecessary API calls or function executions in a real-world scenario.

src/utils/validateSIN.ts: This file has the code that checks if the SIN is valid using the Luhn Algorithm.

src/utils/validateSIN.test.ts: This file contains tests to make sure the validateSIN function works correctly. Read the #test section for more and on how to run.

## Features:
SIN Validation: Checks if the SIN is 9 digits long and valid according to the Luhn Algorithm.
Instant Feedback: Users get results immediately without reloading the page.
Running Tests
To make sure everything works properly, you can run the tests:

## Tests:
npm run test

What the Tests Cover

Valid SIN Test: Ensures that a known valid SIN passes the validation.
Invalid SIN (Incorrect Checksum): Checks that a SIN with an invalid checksum fails the validation.
Invalid SIN (Incorrect Length): Tests SINs that are too short or too long to ensure they are rejected.
Invalid SIN (Non-Numeric Characters): Ensures that SINs containing non-numeric characters are rejected.
Empty String Test: Ensures that an empty string is correctly identified as invalid.
The tests will check if the SIN validation works as expected. You can add more test cases if wishes.

## Example:
Input: 046454286
Result: The algorithm confirms this is a valid SIN.
This project is now ready to be used and tested. If you have any questions, feel free to ask!
