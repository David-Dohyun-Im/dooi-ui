# DooiUI

> **Curated UI Component Templates - React Three.js components via npx**

[![npm version](https://badge.fury.io/js/dooi-ui.svg)](https://www.npmjs.com/package/dooi-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

DooiUI provides curated, production-ready React components with Three.js integration. Browse and download beautiful 3D UI templates with a single npx command.

## 🚀 Quick Start

### List Available Templates

```bash
npx dooi-ui list
```

### Get a Template

```bash
# Get a complete template from src/pages
npx dooi-ui get landing
npx dooi-ui get orbai
npx dooi-ui get shuffle

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

### Complete Templates (from data/templates)
| Template | Description | Dependencies |
|----------|-------------|--------------|
| `landing` | Landing page with fluid blob hero | three, @react-three/fiber |
| `orbai` | Complete page with navigation, hero, and quote sections | three, @react-three/fiber, framer-motion |
| `shuffle` | Page with animated shuffle grid | framer-motion |

### Individual Components
| Component | Description | Dependencies |
|-----------|-------------|--------------|
| `ui/fluid-blob` | 3D animated blob with shader effects | three, @react-three/fiber |
| `Hero/FluidBlobDemo` | Hero section with lava lamp background | three, @react-three/fiber |
| `Cards/ShuffleGridDemo` | Animated image shuffle grid | framer-motion |
>>>>>>> templates

## 🛠️ Usage

### Browse Templates

```bash
# List all available templates and components
npx dooi-ui list
```

### Download Templates

```bash
# Get complete templates from src/pages
npx dooi-ui get landing
npx dooi-ui get orbai
npx dooi-ui get shuffle

# Get specific components
npx dooi-ui get ui/fluid-blob
npx dooi-ui get Hero/FluidBlobDemo
npx dooi-ui get Cards/ShuffleGridDemo
```

## 🔧 Commands

```bash
npx dooi-ui list                    # List all templates and components
npx dooi-ui get <template-id>       # Get complete template (landing, orbai, shuffle)
npx dooi-ui get <category>/<name>   # Get individual component
npx dooi-ui help                    # Show help
```

### Examples

```bash
# List everything available
npx dooi-ui list

# Get complete templates
npx dooi-ui get landing
npx dooi-ui get orbai
npx dooi-ui get shuffle

# Get individual components
npx dooi-ui get ui/fluid-blob
npx dooi-ui get Hero/FluidBlobDemo
npx dooi-ui get Cards/ShuffleGridDemo
```

## 🏗️ Project Structure

```
DooiUI/
<<<<<<< HEAD
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
=======
├─ data/                      # Templates and components
│  ├─ templates/              # Complete page templates
│  │  ├─ landing/             # Landing page template
│  │  │  ├─ LandingMorphic.jsx
│  │  │  └─ meta.json
│  │  ├─ orbai/               # Orbai page template
│  │  │  ├─ OrbaiTemplate.jsx
│  │  │  └─ meta.json
│  │  └─ shuffle/             # Shuffle page template
│  │     ├─ ShuffleTemplate.jsx
│  │     └─ meta.json
│  └─ components/             # Individual components
│     ├─ ui/                  # UI primitives
│     ├─ Hero/                # Hero sections
│     └─ Cards/               # Card components
├─ bin.js                     # npx entry point
>>>>>>> templates
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
<<<<<<< HEAD
2. Add your templates to `data/components/` or `data/templates/`
3. Create a `meta.json` file for each component with proper metadata
4. Update `data/index.json` with component information
5. Test with `npx dooi-ui list` and `npx dooi-ui get <component>`
6. Submit a pull request
=======
2. Add your templates to `data/templates/` for complete pages or `data/components/` for individual components
3. Create a `meta.json` file for each template with dependencies and metadata
4. Test with `npx dooi-ui list` and `npx dooi-ui get <template-name>`
5. Submit a pull request
>>>>>>> templates

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/David-Dohyun-Im/dooi-ui)
- [npm Package](https://www.npmjs.com/package/dooi-ui)

---

**Made with ❤️ for the MCP community**