const assert = require('assert')

module.exports = function (coords) {
  assert(coords)
  assert(coords.latitude)
  assert(coords.longitude)
  const { longitude: lng, latitude: lat } = coords
  const latitude = lat > 0 ? -lat : Math.abs(lat)
  const longitude = lng > 0 ? lng - 180 : lng + 180
  return { latitude, longitude }
}
