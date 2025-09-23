# DooiUI

> **Curated UI Component Templates with Rich Metadata - React Three.js components via npx**

[![npm version](https://badge.fury.io/js/dooi-ui.svg)](https://www.npmjs.com/package/dooi-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

DooiUI provides curated, production-ready React components with Three.js integration and rich metadata. Browse and download beautiful 3D UI templates with enhanced CLI experience, detailed dependency information, and component relationships.

## 🚀 Quick Start

### List Available Templates

```bash
npx dooi-ui list
```

### Get a Template

```bash
# Get a complete template
npx dooi-ui get landing-morphic

# Get a specific component
npx dooi-ui get ui/fluid-blob
```

## 📦 Available Components & Templates

### 🎨 Components

| Category | Component | Description | Tags |
|----------|-----------|-------------|------|
| **ui** | `fluid-blob` | Basic 3D fluid blob component for backgrounds and visual effects | 3d, background, visual-effects, three.js |
| **ui** | `shuffle-grid` | Animated image shuffle grid with smooth transitions and hover effects | animation, grid, cards, transitions, interactive |
| **Hero** | `FluidBlobDemo` | Complete 3D lava lamp hero section with morphing background and text overlay | 3d, hero, lava-lamp, morphing, complete-section |
| **Cards** | `ShuffleGridDemo` | Animated image shuffle grid with smooth transitions and hover effects | animation, grid, cards, transitions, interactive |

### 🏗️ Templates

| Template | Description | Dependencies |
|----------|-------------|--------------|
| `landing-morphic` | Complete landing page with 3D morphing effects | three, @react-three/fiber |
| `pricing-classic` | Classic pricing page template | - |

## 🛠️ Usage

### Browse Templates

```bash
# List all available templates and components
npx dooi-ui list
```

### Download Templates

```bash
# Get a complete template with all files
npx dooi-ui get landing-morphic

# Get a specific component
npx dooi-ui get ui/fluid-blob
npx dooi-ui get Hero/FluidBlobDemo
```

## 🔧 Commands

```bash
npx dooi-ui list                    # List all templates
npx dooi-ui get <template-id>       # Get template files
npx dooi-ui get <category>/<name>   # Get component
npx dooi-ui help                    # Show help
```

## 🏗️ Project Structure

```
DooiUI/
├─ data/                      # Curated templates & components
│  ├─ components/             # Individual components with metadata
│  │  ├─ ui/                  # UI primitives
│  │  │  ├─ fluid-blob/       # 3D fluid blob component
│  │  │  │  ├─ fluid-blob.tsx
│  │  │  │  └─ meta.json      # Component metadata
│  │  │  └─ shuffle-grid/     # Animated grid component
│  │  │     ├─ shuffle-grid.tsx
│  │  │     └─ meta.json      # Component metadata
│  │  ├─ Hero/                # Hero sections
│  │  │  └─ FluidBlobDemo/    # Hero demo component
│  │  │     ├─ FluidBlobDemo.tsx
│  │  │     └─ meta.json      # Component metadata
│  │  └─ Cards/               # Card components
│  │     └─ ShuffleGridDemo/  # Card demo component
│  │        ├─ ShuffleGridDemo.tsx
│  │        └─ meta.json      # Component metadata
│  ├─ templates/              # Complete templates
│  │  ├─ landing-morphic/     # Landing page template
│  │  └─ pricing-classic/     # Pricing page template
│  └─ index.json              # Component registry
├─ bin.js                     # Enhanced npx entry point
└─ package.json               # Package configuration
```

## ✨ New Features in v0.2.0

- **Rich Metadata System**: Each component now includes detailed metadata with descriptions, tags, and dependencies
- **Enhanced CLI Experience**: Improved `list` command with categorized output and tag information
- **Component Relationships**: Track which components use other components
- **Detailed Dependency Information**: Automatic dependency detection and installation guides
- **Better Organization**: Components organized in individual directories with metadata files

## 🤝 Contributing

1. Fork the repository
2. Add your templates to `data/components/` or `data/templates/`
3. Create a `meta.json` file for each component with proper metadata
4. Update `data/index.json` with component information
5. Test with `npx dooi-ui list` and `npx dooi-ui get <component>`
6. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/David-Dohyun-Im/dooi-ui)
- [npm Package](https://www.npmjs.com/package/dooi-ui)

---

**Made with ❤️ for the MCP community**