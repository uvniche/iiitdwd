# IIITDWD Monorepo

This monorepo contains the following projects:

- `apps/website`: The main IIITDWD website
- `apps/content`: The content management system
- `packages/schema`: Shared schema definitions

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 8.15.4

### Installation

```bash
pnpm install
```

### Development

To run all projects in development mode:

```bash
pnpm dev
```

To run a specific project:

```bash
pnpm --filter @iiitdwd/website dev
# or
pnpm --filter @iiitdwd/content dev
```

### Building

To build all projects:

```bash
pnpm build
```

To build a specific project:

```bash
pnpm --filter @iiitdwd/website build
# or
pnpm --filter @iiitdwd/content build
```

## Project Structure

```
.
├── apps/
│   ├── website/     # Main website
│   └── content/     # Content management system
├── packages/
│   └── schema/      # Shared schema definitions
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
``` 