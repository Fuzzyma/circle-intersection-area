# circle-intersection-area

> returns the vertices of the intersection area from all given circles as [vec2](https://www.npmjs.com/package/vec2)


## Install

```
$ npm install circle-intersection-area --save
```


## Usage

```javascript

var cia = require('circle-intersection-area')

var vertices = cia([cx, cy ,radius], [cx, cy, radius], ...)

// or you can pass the center as array
var vertices = cia([[cx, cy] ,radius], [[cx, cy], radius], ...)
```