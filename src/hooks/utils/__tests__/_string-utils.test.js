import { describe, it, expect } from 'vitest'
import { _stringUtils } from '../_string-utils.js'

describe('_stringUtils.abbreviateName', () => {
    it('keeps first and last word intact', () => {
        expect(_stringUtils.abbreviateName('John Michael Smith')).toBe('John M. Smith')
    })

    it('preserves exception words in full', () => {
        expect(_stringUtils.abbreviateName('Leonardo da Vinci')).toBe('Leonardo da Vinci')
    })

    it('handles a two-word name with no abbreviation', () => {
        expect(_stringUtils.abbreviateName('John Smith')).toBe('John Smith')
    })
})

describe('_stringUtils.extractFirstPart', () => {
    it('extracts text before a colon', () => {
        expect(_stringUtils.extractFirstPart('React: A JS Library')).toBe('React')
    })

    it('extracts text before a dash', () => {
        expect(_stringUtils.extractFirstPart('Node.js - Backend')).toBe('Node.js')
    })

    it('extracts text before an em dash', () => {
        expect(_stringUtils.extractFirstPart('Vue.js – Frontend')).toBe('Vue.js')
    })

    it('returns the full string if no separator is found', () => {
        expect(_stringUtils.extractFirstPart('Just a title')).toBe('Just a title')
    })

    it('returns input for falsy value', () => {
        expect(_stringUtils.extractFirstPart('')).toBeFalsy()
        expect(_stringUtils.extractFirstPart(null)).toBeFalsy()
    })
})

describe('_stringUtils.stripHTMLTags', () => {
    it('removes HTML tags', () => {
        expect(_stringUtils.stripHTMLTags('<b>Bold</b> text')).toBe('Bold text')
    })

    it('replaces &nbsp; with a space', () => {
        expect(_stringUtils.stripHTMLTags('Hello&nbsp;World')).toBe('Hello World')
    })

    it('replaces &amp; with &', () => {
        expect(_stringUtils.stripHTMLTags('A &amp; B')).toBe('A & B')
    })

    it('returns empty string for falsy input', () => {
        expect(_stringUtils.stripHTMLTags(null)).toBe('')
        expect(_stringUtils.stripHTMLTags('')).toBe('')
    })
})

describe('_stringUtils.limitTextSize', () => {
    it('returns the original string if within limit', () => {
        expect(_stringUtils.limitTextSize('Hello', 10)).toBe('Hello')
    })

    it('truncates and appends (...) when over limit', () => {
        const result = _stringUtils.limitTextSize('Hello World Long Text', 10)
        expect(result).toContain('(...)')
        expect(result.length).toBeLessThanOrEqual(10)
    })

    it('returns null for falsy input', () => {
        expect(_stringUtils.limitTextSize(null, 10)).toBeNull()
    })
})

describe('_stringUtils.toDisplayPercentage', () => {
    it('appends % sign', () => {
        expect(_stringUtils.toDisplayPercentage(75)).toBe('75%')
    })

    it('returns null for NaN', () => {
        expect(_stringUtils.toDisplayPercentage(NaN)).toBeNull()
    })

    it('returns null for null/undefined', () => {
        expect(_stringUtils.toDisplayPercentage(null)).toBeNull()
        expect(_stringUtils.toDisplayPercentage(undefined)).toBeNull()
    })
})
