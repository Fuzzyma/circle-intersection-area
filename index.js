'use strict'

// http://math.stackexchange.com/questions/221881/the-intersection-of-n-disks-circles/225089#225089

var Circle = require('circle2-lowdeps')

var circleIntersectionArea = function () {
  var circles = []
  var vertices = []
  var verticeCircleMap = []
  var vertice
  var i
  var j
  var k

  // of only one circle given, no intersection possible
  if (arguments.length < 2) {
    return []
  }

  // create a circle obj for every circle given
  for (i = arguments.length; i--;) {
    // we except [cx, cy, r]
    if (arguments[i].length === 3) {
      circles.push(
        Circle(
          [arguments[i][0], arguments[i][1]],
          arguments[i][2]
        )
      )
    // and [[cx, cy], r]
    } else if (arguments[i].length === 2) {
      circles.push(
        Circle(
          arguments[i][0],
          arguments[i][1]
        )
      )
    } else {
      throw new Error('Given circle has to be of form [cx, cy, r] or [[cx, cy], r]')
    }
  }

  // intersect all circles with eachother
  for (i = circles.length; i-- > 1;) {
    for (j = i; j--;) {
      vertice = circles[i].intersectCircle(circles[j])

      if (vertice) {
        // remember which vertices belong to which circle to avoid floating point errors later
        for (k = vertice.length; k--;) {
          verticeCircleMap[vertices.length + k] = [i, j]
        }
        // add vertices to array
        vertices = vertices.concat(vertice)
      }
    }
  }

  // make vertices unique
  for (i = -1, k = vertices.length; i++ < k;) {
    for (j = i + 1; j < vertices.length; ++j) {
      if (vertices[i].equal(vertices[j])) {
        vertices.splice(j--, 1)
      }
    }
  }

  // filter out vertices which are NOT in all circles
  for (i = circles.length; i--;) {
    for (j = vertices.length; j--;) {
      if (verticeCircleMap[j].indexOf(i) > -1) continue
      if (!circles[i].containsPoint(vertices[j])) {
        vertices.splice(j, 1)
      }
    }
  }

  // return vertices left which contain all innermost intersections
  return vertices
}

module.exports = circleIntersectionArea
