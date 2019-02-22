const getMaxPair = require('../src/laundry');

describe("Anna's Laundry assumptions", () => {
  test('1. Example data', () => {
    const numberMachineCanWash = 0;
    const cleanPile = [1, 2, 1, 1];
    const dirtyPile = [1, 4, 3, 2, 4];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(1);
  });

  test('2. Example data', () => {
    const numberMachineCanWash = 2;
    const cleanPile = [1, 2, 1, 1];
    const dirtyPile = [1, 4, 3, 2, 4];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(3);
  });

  test('3. Example data', () => {
    const numberMachineCanWash = 4;
    const cleanPile = [1, 2, 1, 1];
    const dirtyPile = [1, 4, 3, 2, 4];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(4);
  });
});

describe("Anna's Laundry Spec", () => {
  test('for a simple case', () => {
    const numberMachineCanWash = 2;
    const cleanPile = [1, 2, 3, 1, 2, 3];
    const dirtyPile = [3, 3, 4, 1, 2, 7, 9];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(4);
  });

  test('For another simple case where the maximum number is five', () => {
    const numberMachineCanWash = 4;
    const cleanPile = [1, 1, 1, 1, 1, 1];
    const dirtyPile = [1, 2, 2, 1, 3, 4, 5, 2];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(5);
  });

  test('For a case where the machine cannot wash anything and there are no pairs', () => {
    const numberMachineCanWash = 0;
    const cleanPile = [1];
    const dirtyPile = [1, 2, 3, 4, 5, 5];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(0);
  });

  test('For a case where the clean socks are large numbers', () => {
    const numberMachineCanWash = 20;
    const cleanPile = [50, 50, 50, 37, 38, 37, 49, 39, 38, 45, 43];
    const dirtyPile = [50];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(4);
  });

  test('For a case where the dirty socks are large numbers', () => {
    const numberMachineCanWash = 20;
    const cleanPile = [1];
    const dirtyPile = [50, 50, 50, 37, 38, 37, 49, 39, 38, 45, 43];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(3);
  });

  test('For a case where the numbers are large', () => {
    const numberMachineCanWash = 50;
    const cleanPile = [40, 40, 40, 40, 40, 40, 40, 50, 50, 50, 50, 50];
    const dirtyPile = [40, 40, 45, 45, 30, 35, 50, 50, 25, 25, 20, 20];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(10);
  });

  test('For a case where the clean and dirty array have on element each', () => {
    const numberMachineCanWash = 1;
    const cleanPile = [8];
    const dirtyPile = [8];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(1);
  });

  test('For a case where the clean and dirty array have no colour of socks in common', () => {
    const numberMachineCanWash = 20;
    const cleanPile = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const dirtyPile = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(0);
  });

  test('For a case where the clean and dirty array have all colors in common and are of equal length', () => {
    const numberMachineCanWash = 20;
    const cleanPile = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    const dirtyPile = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(10);
  });

  test('For a case where the clean and dirty array have all colors in common and are not of equal length', () => {
    const numberMachineCanWash = 20;
    const cleanPile = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    const dirtyPile = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(10);
  });

  test('For a case where the machine cannot wash any socks', () => {
    const numberMachineCanWash = 0;
    const cleanPile = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    const dirtyPile = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(5);
  });

  test('For a case where all the socks he can take are initially dirty and the machine can wash all of them', () => {
    const numberMachineCanWash = 30;
    const cleanPile = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];
    const dirtyPile = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(6);
  });

  test('For a case where all the socks he can take are initially dirty and the machine only 4', () => {
    const numberMachineCanWash = 4;
    const cleanPile = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];
    const dirtyPile = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(2);
  });

  test('For a case of re-occurring elements', () => {
    const numberMachineCanWash = 5;
    const cleanPile = [1, 2, 3, 2, 3, 4, 5];
    const dirtyPile = [2, 1, 1, 1, 3, 3, 3, 4, 4, 4, 5, 5, 6, 5, 7, 5, 6];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(6);
  });

  test('For another case of re-occurring elements where k = 10', () => {
    const numberMachineCanWash = 10;

    const cleanPile = [
      10,
      11,
      12,
      11,
      10,
      10,
      13,
      11,
      12,
      10,
      13,
      14,
      11,
      10,
      12
    ];

    const dirtyPile = [
      10,
      10,
      11,
      12,
      13,
      10,
      14,
      14,
      14,
      12,
      12,
      10,
      10,
      11,
      11
    ];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(12);
  });

  test('For another case of re-occurring elements where k = 0', () => {
    const numberMachineCanWash = 0;

    const cleanPile = [
      10,
      11,
      12,
      11,
      10,
      10,
      13,
      11,
      12,
      10,
      13,
      14,
      11,
      10,
      12
    ];

    const dirtyPile = [
      10,
      10,
      11,
      12,
      13,
      10,
      14,
      14,
      14,
      12,
      12,
      10,
      10,
      11,
      11
    ];

    expect(getMaxPair(numberMachineCanWash, cleanPile, dirtyPile)).toBe(6);
  });
});
