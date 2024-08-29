export const validateSIN = (sin: string): boolean => {
    // Ensure the SIN is exactly 9 digits long and contains only digits
    if (sin.length !== 9 || !/^\d{9}$/.test(sin)) {
        console.log('sin doesn\'t have 9 digits long or contains non letters')
        return false;
    }

    const digits = sin.split('').map(Number);//put input into array of int
    let sum = 0;

    // Apply Luhn Algorithm: Double every second digit from the right
    for (let i = 0; i < digits.length; i++) {
        let digit = digits[i];
        if (i % 2 === 1) { // Double every second digit from index 1
            digit *= 2;
            if (digit > 9) {
                digit = Math.floor(digit / 10) + (digit % 10); // Add the digits of the result together
            }
        }
        sum += digit;
    }

    // Checksum, A valid SIN must have a sum that is divisible by 10
    return sum % 10 === 0;
};
