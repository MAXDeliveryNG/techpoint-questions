const classifier = require('../src/classifier');
const input = require('../src/inputs/input');
const output = require('../src/outputs/output');
const inputEdge = require('../src/inputs/edge-input');
const outputEdge = require('../src/outputs/out-edge');

describe('classifier assumptions', () => {
  test('it throws error given invalid input', () => {
    expect(() => classifier()).toThrow();
    expect(() => classifier('1')).toThrow();
    expect(() => classifier({})).toThrow();
  });

  test('it does not mutate the original array', () => {
    const immutable = require('../src/inputs/input');
    Object.freeze(immutable);

    expect(() => classifier(immutable)).not.toThrow();
    expect(classifier(immutable)).toBeDefined();
  });

  test('it does not throw for empty arrays', () => {
    const arr = [];

    expect(() => classifier(arr)).not.toThrow();
    expect(classifier(arr)).toEqual({ noOfGroups: 0 });
  });

  test('it makes no assumptions about the dob', () => {
    const arr = [
      {
        name: 'Patrick',
        dob: new Date('2015-10-15'),
        regNo: '19',
      },
    ];

    expect(() => classifier(arr)).not.toThrow();
    expect(classifier(arr)).toBeDefined();
  });
});

describe('classifier spec', () => {
  test('it works for single value arrays', () => {
    const arr = [
      {
        name: 'Patrick',
        dob: new Date('2015-10-15'),
        regNo: '19',
      },
    ];

    expect(classifier(arr)).toHaveProperty('noOfGroups', 1);
    expect(classifier(arr)).toHaveProperty('group1.members');
  });

  test('partial values - some key names and values', () => {
    const out = classifier(input);

    expect(out).toMatchObject(output);
  });

  test('it gets everything right', () => {
    const out = classifier(input);

    expect(out).toEqual(output);
  });

  test('passes for a different input', () => {
    const out = classifier(inputEdge);

    expect(out).toEqual(outputEdge);
  });
});
