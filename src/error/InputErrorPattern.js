/* Here you can add the pattern and Error message  */

export const patternArray = {
  email: {
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
    patternMismatch: 'Please enter valid Email ex:"example@example.com"',
    valueMissing: 'Should not be empty'
  },
  password: {
    pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{8,64}$',
    patternMismatch: 'Please enter valid password ex:"Abcd@123"',
    valueMissing: 'Should not be empty'
  }
};
