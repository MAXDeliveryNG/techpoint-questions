# Question

Given an input containing a list of students' names, dates of birth, and their registration number.

Write a program that classifies the students into groups where

1. Each group has a maximum of 3 students.
2. No student is in more than 1 group.
3. The difference in years of the ages of student in any particular group is not more than 5. \*

`Your solution should include in its output`

1. The groups: with the names and age of its members.
2. The age of the oldest member in each group.
3. The sum of ages of students in each group.
4. The regNo of students in each group in ascending order.

## Example input

```js
const input = [
  {
    name: 'Hendrick',
    dob: '1853-07-18T00:00:00.000Z',
    regNo: '041',
  },
  {
    name: 'Albert',
    dob: '1879-03-14T00:00:00.000Z',
    regNo: '033',
  },
  {
    name: 'Marie',
    dob: '1867-11-07T00:00:00.000Z',
    regNo: '024',
  },
  {
    name: 'Neils',
    dob: '1885-10-07T00:00:00.000Z',
    regNo: '02',
  },
  {
    name: 'Max',
    dob: '1858-04-23T00:00:00.000Z',
    regNo: '014',
  },
  {
    name: 'Erwin',
    dob: '1887-08-12T00:00:00.000Z',
    regNo: '09',
  },
  {
    name: 'Auguste',
    dob: '1884-01-28T00:00:00.000Z',
    regNo: '08',
  },
  {
    name: 'Karl',
    dob: '1901-12-05T00:00:00.000Z',
    regNo: '120',
  },
  {
    name: 'Louis', //
    dob: '1892-08-15T00:00:00.000Z',
    regNo: '022',
  },
  {
    name: 'Arthur',
    dob: '1892-09-10T00:00:00.000Z',
    regNo: '321',
  },
  {
    name: 'Paul',
    dob: '1902-08-08T00:00:00.000Z',
    regNo: '055',
  },
  {
    name: 'William',
    dob: '1890-03-31T00:00:00.000Z',
    regNo: '013',
  },
  {
    name: 'Owen',
    dob: '1879-04-26T00:00:00.000Z',
    regNo: '052',
  },
  {
    name: 'Martin',
    dob: '1871-02-15T00:00:00.000Z',
    regNo: '063',
  },
  {
    name: 'Guye',
    dob: '1866-10-15T00:00:00.000Z',
    regNo: '084',
  },
  {
    name: 'Charles',
    dob: '1868-02-14T00:00:00.000Z',
    regNo: '091',
  },
];
```

## Example Output

```js
const exampleOutput = {
  noOfGroups: 2,
  group1: {
    members: [{ name: 'Paul', age: 116 }, { name: 'Karl', age: 117 }],
    oldest: 117,
    sum: 233,
    regNos: [55, 120],
  },
  group2: {
    members: [
      { name: 'Louis', age: 126 },
      { name: 'Arthur', age: 126 },
      { name: 'William', age: 128 },
    ],
    oldest: 128,
    sum: 380,
    regNos: [13, 22, 321],
  },
};
```
