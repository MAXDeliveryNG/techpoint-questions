const output = {
  noOfGroups: 7,
  group1: {
    members: [
      { name: 'Paul', dob: '1902-08-08T00:00:00.000Z', regNo: '055', age: 117 },
      { name: 'Karl', dob: '1901-12-05T00:00:00.000Z', regNo: '120', age: 118 }
    ],
    oldest: 118,
    sum: 235,
    regNos: [55, 120]
  },
  group2: {
    members: [
      {
        name: 'Louis',
        dob: '1892-08-15T00:00:00.000Z',
        regNo: '022',
        age: 127
      },
      {
        name: 'Arthur',
        dob: '1892-09-10T00:00:00.000Z',
        regNo: '321',
        age: 127
      },
      {
        name: 'William',
        dob: '1890-03-31T00:00:00.000Z',
        regNo: '013',
        age: 129
      }
    ],
    oldest: 129,
    sum: 383,
    regNos: [13, 22, 321]
  },
  group3: {
    members: [
      { name: 'Erwin', dob: '1887-08-12T00:00:00.000Z', regNo: '09', age: 132 },
      { name: 'Neils', dob: '1885-10-07T00:00:00.000Z', regNo: '02', age: 134 },
      {
        name: 'Auguste',
        dob: '1884-01-28T00:00:00.000Z',
        regNo: '08',
        age: 135
      }
    ],
    oldest: 135,
    sum: 401,
    regNos: [2, 8, 9]
  },
  group4: {
    members: [
      {
        name: 'Albert',
        dob: '1879-03-14T00:00:00.000Z',
        regNo: '033',
        age: 140
      },
      { name: 'Owen', dob: '1879-04-26T00:00:00.000Z', regNo: '052', age: 140 }
    ],
    oldest: 140,
    sum: 280,
    regNos: [33, 52]
  },
  group5: {
    members: [
      {
        name: 'Martin',
        dob: '1871-02-15T00:00:00.000Z',
        regNo: '063',
        age: 148
      },
      {
        name: 'Charles',
        dob: '1868-02-14T00:00:00.000Z',
        regNo: '091',
        age: 151
      },
      { name: 'Marie', dob: '1867-11-07T00:00:00.000Z', regNo: '024', age: 152 }
    ],
    oldest: 152,
    sum: 451,
    regNos: [24, 63, 91]
  },
  group6: {
    members: [
      { name: 'Guye', dob: '1866-10-15T00:00:00.000Z', regNo: '084', age: 153 }
    ],
    oldest: 153,
    sum: 153,
    regNos: [84]
  },
  group7: {
    members: [
      { name: 'Max', dob: '1858-04-23T00:00:00.000Z', regNo: '014', age: 161 },
      {
        name: 'Hendrick',
        dob: '1853-07-18T00:00:00.000Z',
        regNo: '041',
        age: 166
      }
    ],
    oldest: 166,
    sum: 327,
    regNos: [14, 41]
  }
};

module.exports = output;
