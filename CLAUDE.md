# react-portfolio-template — CLAUDE.md

## Project Overview
A React 18 + Vite single-page portfolio app. Customization lives in `src/assets/` (data JSON files, images). UI components are in `src/components/`, hooks and utilities in `src/hooks/`.

## Tech Stack
- **Runtime:** React 18, Vite 6
- **Styling:** Bootstrap 5, SASS (scss)
- **Testing:** Vitest 2, @testing-library/react, jsdom
- **CI:** GitHub Actions (`.github/workflows/ci.yml` runs tests; `deploy.yml` deploys to GitHub Pages)

## Dev Commands
| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server |
| `npm test` | Run all tests (Vitest, single pass) |
| `npm run test:watch` | Run tests in watch mode |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |

## Architecture Notes
- `src/assets/` — JSON data files that drive all portfolio content (edit these to personalize)
- `src/hooks/utils/` — Pure utility functions; no React, no DOM; easy to unit-test
- `src/hooks/utils/__tests__/` — All unit tests live here, one file per utility module
- `src/components/` — React UI; prefer integration tests via @testing-library/react
- `src/providers/` — Context providers for global state

## Testing Conventions
- All utility tests go in `src/hooks/utils/__tests__/` named `_<module>.test.js`
- Use `describe` + `it` blocks from Vitest (globals: true)
- Do NOT mock pure utility functions — test them directly
- Component tests use `@testing-library/react` with queries that mirror user perception (getByRole, getByText)
- Tests must pass before any push; CI blocks merges on failure

## Rules
- Never commit with `--no-verify`
- Do not add dependencies without checking if a utility function already exists in `src/hooks/utils/`
- Keep utility functions pure and DOM-free where possible
- Run `npm test` before marking any task complete
