import { describe, it, expect } from 'vitest'
import { _validationUtils } from '../_validation-utils.js'

describe('_validationUtils.validateEmail', () => {
    it('accepts a valid email', () => {
        expect(_validationUtils.validateEmail('user@example.com')).toBe(true)
    })

    it('accepts email with subdomain', () => {
        expect(_validationUtils.validateEmail('user@mail.example.co.uk')).toBe(true)
    })

    it('rejects missing @', () => {
        expect(_validationUtils.validateEmail('userexample.com')).toBe(false)
    })

    it('rejects missing domain', () => {
        expect(_validationUtils.validateEmail('user@')).toBe(false)
    })

    it('rejects plain string', () => {
        expect(_validationUtils.validateEmail('notanemail')).toBe(false)
    })
})

describe('_validationUtils.isLongerThan', () => {
    it('returns true when word count exceeds threshold', () => {
        expect(_validationUtils.isLongerThan('one two three four', 3)).toBe(true)
    })

    it('returns false when word count is at threshold', () => {
        expect(_validationUtils.isLongerThan('one two three', 3)).toBe(false)
    })

    it('returns false when word count is below threshold', () => {
        expect(_validationUtils.isLongerThan('one two', 3)).toBe(false)
    })
})

describe('_validationUtils.isSpam', () => {
    it('flags a very short message as spam', () => {
        expect(_validationUtils.isSpam('hi')).toBe(true)
    })

    it('flags gibberish (no vowels) as spam', () => {
        expect(_validationUtils.isSpam('bcdfghjklmnpqrstvwxyz bcdfg')).toBe(true)
    })

    it('does not flag a normal sentence as spam', () => {
        expect(_validationUtils.isSpam('Hello, I would like to get in touch with you.')).toBe(false)
    })

    it('skips spam check for non-Latin text', () => {
        // Non-Latin text has < 50% Latin chars, so isSpam skips heuristics → false
        expect(_validationUtils.isSpam('こんにちは世界')).toBe(false)
    })
})
