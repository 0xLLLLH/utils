import { describe, expect, it } from 'vitest'

import { rejectAfter, resolveAfter } from './promise'

// set a small value to avoid the tests spend too much time
const waitTimeInMs = 50

describe('promise', () => {
  describe('resolveAfter()', () => {
    it('should resolve with correct value', async () => {
      expect(await resolveAfter(waitTimeInMs, 666)).toEqual(666)
      expect(await resolveAfter(waitTimeInMs, 'asd')).toEqual('asd')
    })
  })

  describe('rejectAfter()', () => {
    it('should resolve with correct value', async () => {
      try {
        await rejectAfter(waitTimeInMs, 666)
      } catch (e) {
        expect(e).toEqual(666)
      }

      try {
        await rejectAfter(waitTimeInMs, '666')
      } catch (e) {
        expect(e).toEqual('666')
      }
    })
  })
})
