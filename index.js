const assert = require('assert')

/**
 * @description Returns coordinates on the other side of the earth.
 * @param {{latitude: number, longitude: number}} coords
 * @returns {{latitude: number, longitude: number}}
 */
function antipodes (coords) {
  assert(coords)
  assert(coords.latitude)
  assert(coords.longitude)
  const { longitude, latitude } = coords

  return {
    latitude: latitude > 0 ? -latitude : Math.abs(latitude),
    longitude: longitude > 0 ? longitude - 180 : longitude + 180
  }
}

module.exports = antipodes
