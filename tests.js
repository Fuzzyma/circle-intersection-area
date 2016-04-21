/*!
 * circle-intersection-area <https://github.com/Fuzzyma/circle-intersection-area>
 *
 * Copyright (c) 2016, Ulrich-Matthias Schäfer.
 * Licensed under the MIT License.
 */

'use strict'

/* deps:mocha */
var should = require('should') // eslint-disable-line
var self = require('./')
var Vec2 = require('vec2')

describe('circle-intersection-area', function () { // eslint-disable-line
  it('should throw an error if the value passed is not in the needed form:', function () { // eslint-disable-line
    (function () {
      self('a', 'b', 'c')
    }).should.throw('Given circle has to be of form [cx, cy, r] or [[cx, cy], r]')
  })

  it('should return an array with vec2:', function () { // eslint-disable-line
    self([0, 0, 2.5], [5, 0, 2.5]).should.eql([Vec2(2.5, 0)])
    self([[0, 0], 2.5], [[5, 0], 2.5]).should.eql([Vec2(2.5, 0)])
  })
})
