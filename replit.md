# Within Fitness

Within Fitness is a React/Vite wellness assessment experience with interactive body, stress, and reality-check audits.

## Run & Operate

- `pnpm --filter @workspace/within-fitness run dev` — run the frontend (port 22821)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `DATABASE_URL` is provided by Replit's managed PostgreSQL runtime.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/within-fitness` — React/Vite frontend and assessment tools
- `artifacts/api-server` — Express API server
- `lib/api-spec` — OpenAPI source contract
- `lib/api-zod` and `lib/api-client-react` — generated validation and frontend client packages
- `lib/db` — Drizzle database package and schema

## Architecture decisions

- The repository remains a pnpm workspace; frontend, API, and shared libraries are kept as separate packages.
- The frontend is served by the registered Within Fitness artifact workflow.

## Product

Users can explore the Within Fitness landing page and complete interactive wellness audits that generate reports for handoff by email.

## User preferences

No additional user preferences recorded.

## Gotchas

- Use pnpm rather than npm or yarn.
- The report email action opens Gmail with `explore@within.fitness` as the recipient.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
