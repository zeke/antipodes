# Antipodes

This is a Node.js module for finding geocoordinates on the other side of the earth.

From [Wikipedia](https://en.wikipedia.org/wiki/Antipodes):

> In geography, the antipode (/ˈæntɪˌpoʊd/ or /ænˈtɪpədiː/) of any spot on Earth is the point on Earth's surface diametrically opposite to it. A pair of points antipodal (/ænˈtɪpədəl/) to each other are situated such that a straight line connecting the two would pass through Earth's center. Antipodal points are as far away from each other as possible.
> 
> In the Northern Hemisphere, "the Antipodes" may refer to Australia and New Zealand, and Antipodeans to their inhabitants. Geographically, the antipodes of Britain and Ireland are in the Pacific Ocean, south of New Zealand. This gave rise to the name of the Antipodes Islands of New Zealand, which are close to the antipode of London. The antipodes of Australia are in the North Atlantic Ocean, while parts of Spain, Portugal, and Morocco are antipodal to New Zealand.

## Installation

```sh
npm install antipodes
```

## Usage

The module exports a single function which expects a [GeolocationCoordinates](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates)-compatible object with `latitude` and `longitude` properties:

```js
const antipodes = require('antipodes')

antipodes({ 
  longitude: -73.951442, 
  latitude: 40.698470 
})
// => { longitude: 106.048558, latitude: -40.698470 }
```

## Further Reading

- https://en.wikipedia.org/wiki/Antipodes
- https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates
- https://www.npmjs.com/package/geoposition-to-object
- https://github.com/zeke/geoposition-to-geojson