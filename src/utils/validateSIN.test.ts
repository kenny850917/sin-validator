import { validateSIN } from './validateSIN';

test('valid SIN', () => {
    expect(validateSIN('046454286')).toBe(true);
    expect(validateSIN('193456787')).toBe(true);
    expect(validateSIN('509059697')).toBe(true);
    expect(validateSIN('642523682')).toBe(true);
    expect(validateSIN('567890124')).toBe(true);
    expect(validateSIN('046454286')).toBe(true);
});

test('invalid SIN - wrong checksum', () => {
    expect(validateSIN('046454287')).toBe(false);
    expect(validateSIN('234567891')).toBe(false);
    expect(validateSIN('678901235')).toBe(false);
    expect(validateSIN('789012346')).toBe(false);
    expect(validateSIN('890123457')).toBe(false);
});

test('invalid SIN - incorrect length (too short)', () => {
    expect(validateSIN('12345678')).toBe(false);
});

test('invalid SIN - contains non-numeric characters', () => {
    expect(validateSIN('04645A286')).toBe(false);
});

test('invalid SIN - incorrect length (too long)', () => {
    expect(validateSIN('1234567890')).toBe(false);
});

test('invalid SIN - empty string', () => {
    expect(validateSIN('')).toBe(false);
});
