const decodeMorse = require('../src/morse');

describe('decodeMorse assumptions', () => {
  test('it returns an empty string untouched', () => {
    expect(decodeMorse('')).toBe('');
  });

  test('it bails given invalid data', () => {
    expect(() => decodeMorse(1)).toThrow();
    expect(() => decodeMorse([])).toThrow();
  });
});

describe('decodeMorse spec', () => {
  test('it decodes single letters and words', () => {
    expect(decodeMorse('.-')).toBe('A');
    expect(decodeMorse('.')).toBe('E');
    expect(decodeMorse('..')).toBe('I');
    expect(decodeMorse('...---...')).toBe('SOS');
  });

  test('it decodes letters with spaces', () => {
    expect(decodeMorse('. .')).toBe('EE');
    expect(decodeMorse('.   .')).toBe('E E');
    expect(decodeMorse('... --- ...')).toBe('SOS');
    expect(decodeMorse('...   ---   ...')).toBe('S O S');
    expect(decodeMorse('-- .- -..-   -. --- .--')).toBe('MAX NOW');
  });

  test('it decodes letters with multiple spaces', () => {
    expect(decodeMorse(' . ')).toBe('E');
    expect(decodeMorse('   .   . ')).toBe('E E');
    expect(
      decodeMorse(
        '      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-     '
      )
    ).toBe('SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  });
});
