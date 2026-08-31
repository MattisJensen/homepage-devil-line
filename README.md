# Devil-Line Windsurfing Homepage

Astro-based static website for Devil-Line Windsurfing.

## Requirements

- Node.js 20+
- pnpm

## Development

Install dependencies:

```sh
node --version

pnpm install
```

Start local dev server:

```sh
pnpm dev
```

## Build

Create production build:

```sh
pnpm build
```

Preview production build locally:

```sh
pnpm preview
```

## Project Notes

- Site output is static (`astro build` to `dist/`).
- Language routes are under `/de` and `/en`.
- Global styles live in `src/styles/global.css`.
