'use strict'

// http://math.stackexchange.com/questions/221881/the-intersection-of-n-disks-circles/225089#225089

var Circle = require('circle2')
var unique = require('array-unique')
var Vec2 = require('vec2')

var circleIntersectionArea = function () {
  var circles = []
  var vertices = []
  var i
  var j

  if (arguments.length < 2) {
    return []
  }

  for (i = arguments.length; i--;) {
    if (arguments[i].length === 3) {
      circles.push(
        Circle(
          Vec2(arguments[i][0], arguments[i][1]),
          arguments[i][2]
        )
      )
    } else if (arguments[i].length === 2) {
      circles.push(
        Circle(
          Vec2(arguments[i][0][0], arguments[i][0][1]),
          arguments[i][1]
        )
      )
    } else {
      throw new Error('Given circle has to be of form [cx, cy, r] or [[cx, cy], r]')
    }
  }

  for (i = circles.length; i-- > 1;) {
    for (j = i; j--;) {
      vertices = vertices.concat(circles[i].intersectCircle(circles[j]) || [])
    }
  }

  vertices = unique(vertices)

  for (i = circles.length; i--;) {
    for (j = vertices.length; j--;) {
      if (!circles[i].containsPoint(vertices[j])) {
        vertices.splice(j, 1)
      }
    }
  }

  return vertices
}

module.exports = circleIntersectionArea
