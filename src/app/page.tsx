'use client'
import { useState, useEffect } from 'react';
import { validateSIN } from '../utils/validateSIN';

const Home:React.FC=()=> {
  const [sin, setSin] = useState<string>(''); //initial with empty string
  const [isValid, setIsValid] = useState<boolean | null>(null); // Initial state as null so invalid text won't render
  const [isDisabled, setIsDisabled] = useState<boolean | undefined>(true); // Initial state as true since SIN starts as empty

  useEffect(() => {
    setIsDisabled(sin.length !== 9);
  }, [sin]); // Update isDisabled whenever sin changes from input

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsValid(validateSIN(sin)); //set if sin is valid
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // This regular expression matches a string that contains only digits (0-9) or is empty.
    if (/^\d*$/.test(value)) {
      setSin(value);
    }
  };

  return (
    <main className="md:h-screen py-36 flex justify-center items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="relative">
          <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
            <h5 className="my-6 text-xl font-semibold justify-center flex">SIN Validator</h5>
              <p className="text-slate-400 mb-6">
                Please enter a 9 digits SIN to check if it is valid.
              </p>
              <form className="text-start" onSubmit={handleSubmit}>

                  <div className="mb-5">
                    <label className="font-semibold" htmlFor="SIN">
                      Your SIN:
                    </label>
                    <input
                      id="SIN"
                      type="text"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600"
                      onChange={handleInputChange}
                      value={sin}
                      placeholder="Enter your SIN"
                      maxLength={9}
                    />
                  </div>

                  <div className="mb-4">
                    <button
                      type="submit"
                      className={`py-2 px-5 inline-block duration-500 text-base text-center rounded-md w-full 
                      ${isDisabled ? 'bg-gray-400 text-gray-700 border-gray-400 cursor-not-allowed opacity-50' : 'bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white'}`}
                      disabled={isDisabled}
                    >
                      Validate
                    </button>
                  </div>
                  {isValid !== null && (
                    <p className={`mt-4 text-lg ${isValid ? 'text-green-400' : 'text-red-400'}`}>
                      {isValid ? 'Valid SIN ✅' : 'Invalid SIN ❌'}
                    </p>
                  )}             
              </form>
            </div>
      </div>
    </main>
  );
}
export default Home;
