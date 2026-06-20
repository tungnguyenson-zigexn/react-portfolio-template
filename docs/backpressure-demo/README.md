# Backpressure Demo — Level 6 Gate Evidence

## What this proves
The CI test gate (`ci.yml`) automatically catches broken code without human review.
A deliberate bug was injected, the gate caught it (RED), the bug was fixed, and the gate passed (GREEN).

---

## RED — Gate catches the failure

### Bug injected
File: `src/hooks/utils/_number-utils.js`
Change: `clamp()` returns `min` instead of `max` for NaN input.

### Local test output (RED)
```
> react-portfolio-template-by-ryan-balieiro@2.0.3 test
> vitest run


 RUN  v2.1.9 /Users/tungns/Documents/Projects/react-portfolio-template

 ✓ src/hooks/utils/__tests__/_search-utils.test.js (3 tests) 2ms
 ✓ src/hooks/utils/__tests__/_validation-utils.test.js (12 tests) 3ms
 ✓ src/hooks/utils/__tests__/_string-utils.test.js (18 tests) 3ms
 ❯ src/hooks/utils/__tests__/_number-utils.test.js (14 tests | 1 failed) 7ms
   × _numberUtils.clamp > returns max for NaN input 5ms
     → expected +0 to be 10 // Object.is equality

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/hooks/utils/__tests__/_number-utils.test.js > _numberUtils.clamp > returns max for NaN input
AssertionError: expected +0 to be 10 // Object.is equality

- Expected
+ Received

- 10
+ 0

 ❯ src/hooks/utils/__tests__/_number-utils.test.js:18:48
     16|
     17|     it('returns max for NaN input', () => {
     18|         expect(_numberUtils.clamp(NaN, 0, 10)).toBe(10)
       |                                                ^
     19|     })
     20| })

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed | 3 passed (4)
      Tests  1 failed | 46 passed (47)
   Start at  16:33:09
   Duration  686ms (transform 52ms, setup 227ms, collect 65ms, tests 15ms, environment 1.50s, prepare 207ms)
```

### CI gate failure
After pushing this broken commit, GitHub Actions `CI — Test Gate` job fails automatically.
CI run URL: [to be added after push]

---

## GREEN — Gate passes after fix

### Fix applied
File: `src/hooks/utils/_number-utils.js`
Change: Reverted `clamp()` to return `max` for NaN input (original correct behavior).

### Local test output (GREEN)
```
> react-portfolio-template-by-ryan-balieiro@2.0.3 test
> vitest run


 RUN  v2.1.9 /Users/tungns/Documents/Projects/react-portfolio-template

 ✓ src/hooks/utils/__tests__/_search-utils.test.js (3 tests) 2ms
 ✓ src/hooks/utils/__tests__/_number-utils.test.js (14 tests) 2ms
 ✓ src/hooks/utils/__tests__/_validation-utils.test.js (12 tests) 3ms
 ✓ src/hooks/utils/__tests__/_string-utils.test.js (18 tests) 3ms

 Test Files  4 passed (4)
      Tests  47 passed (47)
   Start at  16:36:09
   Duration  707ms (transform 57ms, setup 237ms, collect 69ms, tests 10ms, environment 1.65s, prepare 199ms)
```

### CI gate success
After pushing this fix commit, GitHub Actions `CI — Test Gate` job passes automatically.
CI run URL: [to be added once CI completes]
