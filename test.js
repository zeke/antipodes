const antipodes = require('.')

test('is a function', () => {
  expect(typeof antipodes).toBe('function')
})

test('accepts a GeolocationCoordinates object', () => {
  const input = { longitude: -82.53, latitude: 27.97 }
  const output = { longitude: 97.47, latitude: -27.97 }
  expect(antipodes(input)).toEqual(output)
})

test('accepts integers', () => {
  const input = { longitude: -82, latitude: 25 }
  const output = { longitude: 98, latitude: -25 }
  expect(antipodes(input)).toEqual(output)
})

test('supports precise(ish) coordinates', () => {
  const input = { longitude: -73.951442, latitude: 40.698470 }
  const output = { longitude: 106.048558, latitude: -40.698470 }
  expect(antipodes(input)).toEqual(output)
})
