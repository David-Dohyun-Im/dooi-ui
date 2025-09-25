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

## 📦 Available Templates

### Complete Templates (from src/pages)
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
└─ package.json               # Package configuration
```

## 🤝 Contributing

1. Fork the repository
2. Add your templates to `data/templates/` for complete pages or `data/components/` for individual components
3. Create a `meta.json` file for each template with dependencies and metadata
4. Test with `npx dooi-ui list` and `npx dooi-ui get <template-name>`
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/David-Dohyun-Im/dooi-ui)
- [npm Package](https://www.npmjs.com/package/dooi-ui)

---

**Made with ❤️ for the MCP community**