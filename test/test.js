/*!
 * circle-intersection-area <https://github.com/Fuzzyma/circle-intersection-area>
 *
 * Copyright (c) 2016, Ulrich-Matthias Schäfer.
 * Licensed under the MIT License.
 */

'use strict'

/* deps:mocha */
var should = require('should')
var self = require('../')
var Vec2 = require('vec2')

// use should for linter
should(10).eql(10)

/*eslint no-undef: 0*/
describe('circle-intersection-area', function () {
  it('should throw an error if the value passed is not in the needed form:', function () {
    (function () {
      self('a', 'b', 'c')
    }).should.throw('Given circle has to be of form [cx, cy, r] or [[cx, cy], r]')
  })

  it('should return an array with vec2', function () {
    self([0, 0, 2.5], [5, 0, 2.5]).should.eql([Vec2(2.5, 0)])
    self([[0, 0], 2.5], [[5, 0], 2.5]).should.eql([Vec2(2.5, 0)])
  })
})
