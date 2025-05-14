# React Vite SSR Starter

A starter template for building static sites with React, Vite, and server-side rendering (SSR). It includes a basic setup for rendering React components to static HTML files and supports Markdown content.

## Features

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Server-Side Rendering (SSR)**: Pre-render React components to static HTML files.
- **Markdown Support**: Render Markdown files as React components.
- **TypeScript**: Strongly typed JavaScript for better developer experience.

## Project Structure

```
react-vite-ssr-starter/
├── build/                # Output directory for static files
├── src/                  # Source code
│   ├── content/          # Markdown content
│   ├── layouts/          # Layout components
│   ├── pages/            # Page components
│   ├── types/            # TypeScript type definitions
│   └── util/             # Utility files (SSR, dev server, etc.)
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/slogsdon/react-vite-ssr-starter.git
   cd react-vite-ssr-starter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

### Build

Generate static files:
```bash
npm run build && npm run export
```

### Preview

Preview the built site:
```bash
npm run serve
```

### Clean

Remove the `build` directory:
```bash
npm run clean
```

## Key Files

### `src/util/ssr.tsx`
Handles server-side rendering and static site generation. Pre-renders React components to static HTML files for predefined routes.

### `vite.config.ts`
Configuration for Vite, including plugins for React and Markdown support.

### `tsconfig.json`
TypeScript configuration for the project.

### `src/pages/*`
React components for individual pages, such as Home, About, and Dashboard.

## License

This project is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.
