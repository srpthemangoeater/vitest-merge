import { describe, it, expect } from 'vitest'
import { merge } from './merge'

describe('merge()', () => {
  it('given unit test', () => {
    const collection_1 = [1, 4, 7]
    const collection_2 = [9, 6, 2]
    const collection_3 = [3, 5, 8]

    const result = merge(collection_1, collection_2, collection_3)
    
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
