const assert = require('assert')

module.exports = function (coords, opts = { implementation: 'leitzel' }) {
  assert(coords)
  assert(coords.latitude)
  assert(coords.longitude)
  const { longitude: lng, latitude: lat } = coords

  switch (opts.implementation) {
    // https://github.com/joshleitzel/antipodes
    case 'leitzel':
      return {
        latitude: lat > 0 ? -lat : Math.abs(lat),
        longitude: lng > 0 ? lng - 180 : lng + 180
      }

    // https://twitter.com/mourner/status/1291293509597757440
    case 'agafonkin':
      return {
        longitude: (lng + 360) % 360 - 180,
        latitude: -lat
      }
  }
}
