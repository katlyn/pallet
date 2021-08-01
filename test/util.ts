import t from 'tap'

import * as util from '../src/util'

void t.test('isObject', t => {
  t.ok(util.isObject({}), 'object is an object')
  t.notOk(util.isObject(0), 'number is not an object')
  t.notOk(util.isObject(null), 'null is not an object')
  t.notOk(util.isObject([]), 'array is not an object')
  t.notOk(util.isObject(''), 'string is not an object')
  t.notOk(util.isObject(undefined), 'undefined is not an object')

  t.end()
})

void t.test('snek_case conversions', t => {
  const test = 'snek_case'
  const goal = 'snekCase'
  t.equal(
    util.snekToCamel(test), goal,
    'snekToCamel converting snek_case string to camelCase'
  )

  const testObj = {
    snek_case: 'test string',
    snek_number: 1,
    snek_null: null,
    snek_boolean: true,
    snek_array: ['one', 2, null, true, { snek_case: true }],
    snek_object: {
      snek_property: 'hello!'
    },
    toString: 'asdf'
  }
  const targetObj = {
    snekCase: 'test string',
    snekNumber: 1,
    snekNull: null,
    snekBoolean: true,
    snekArray: ['one', 2, null, true, { snekCase: true }],
    snekObject: {
      snekProperty: 'hello!'
    },
    toString: 'asdf'
  }
  t.strictSame(
    util.snekKeysToCamel(testObj), targetObj,
    'snekKeysToCamel converting snek_case string to cameCase'
  )

  const inheritedTest = Object.create(testObj)
  t.strictSame(
    util.snekKeysToCamel(inheritedTest), {},
    'snekKeysToCamel doesn\'t copy inherited values'
  )

  t.end()
})
