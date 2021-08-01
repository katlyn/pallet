import t from 'tap'
import { Pallet } from '../src'

void t.test('Constructing Pallet', t => {
  t.doesNotThrow(() => new Pallet())
  t.end()
})
