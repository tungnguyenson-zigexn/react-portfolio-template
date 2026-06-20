import { describe, it, expect } from 'vitest'
import { _numberUtils } from '../_number-utils.js'

describe('_numberUtils.clamp', () => {
    it('returns the number when within bounds', () => {
        expect(_numberUtils.clamp(5, 0, 10)).toBe(5)
    })

    it('returns min when number is below min', () => {
        expect(_numberUtils.clamp(-5, 0, 10)).toBe(0)
    })

    it('returns max when number is above max', () => {
        expect(_numberUtils.clamp(15, 0, 10)).toBe(10)
    })

    it('returns max for NaN input', () => {
        expect(_numberUtils.clamp(NaN, 0, 10)).toBe(10)
    })
})

describe('_numberUtils.forceIntoBounds', () => {
    it('returns the number when within bounds', () => {
        expect(_numberUtils.forceIntoBounds(5, 0, 10)).toBe(5)
    })

    it('returns default/max when above max', () => {
        expect(_numberUtils.forceIntoBounds(15, 0, 10)).toBe(10)
    })

    it('returns default/min when below min', () => {
        expect(_numberUtils.forceIntoBounds(-1, 0, 10)).toBe(0)
    })

    it('returns defaultValue for null input', () => {
        expect(_numberUtils.forceIntoBounds(null, 0, 10, 3)).toBe(3)
    })

    it('returns defaultValue for undefined input', () => {
        expect(_numberUtils.forceIntoBounds(undefined, 0, 10, 7)).toBe(7)
    })
})

describe('_numberUtils.isValidNumber', () => {
    it('returns true for a regular number', () => {
        expect(_numberUtils.isValidNumber(42)).toBe(true)
    })

    it('returns true for zero', () => {
        expect(_numberUtils.isValidNumber(0)).toBe(true)
    })

    it('returns false for null', () => {
        expect(_numberUtils.isValidNumber(null)).toBe(false)
    })

    it('returns false for undefined', () => {
        expect(_numberUtils.isValidNumber(undefined)).toBe(false)
    })

    it('returns false for NaN', () => {
        expect(_numberUtils.isValidNumber(NaN)).toBe(false)
    })
})
