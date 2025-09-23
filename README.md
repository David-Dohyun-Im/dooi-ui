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
# Get a complete template
npx dooi-ui get landing-morphic

# Get a specific component
npx dooi-ui get ui/fluid-blob
```

## 📦 Available Templates

| Template | Description | Dependencies |
|----------|-------------|--------------|
| `fluid-blob` | 3D animated blob with shader effects | three, @react-three/fiber |
| `FluidBlobDemo` | Hero section with lava lamp background | three, @react-three/fiber |
| `ShuffleGridDemo` | Animated image shuffle grid | framer-motion |
| `landing-morphic` | Complete landing page template | All above |

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
│  ├─ components/             # Individual components
│  │  ├─ ui/                  # UI primitives
│  │  ├─ Hero/                # Hero sections
│  │  └─ Cards/               # Card components
│  └─ templates/              # Complete templates
│     └─ landing-morphic/     # Landing page template
├─ bin.js                     # npx entry point
└─ package.json               # Package configuration
```

## 🤝 Contributing

1. Fork the repository
2. Add your templates to `data/components/` or `data/templates/`
3. Update `data/index.json`
4. Test with `npx dooi-ui start` and `npx dooi-ui http`
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/David-Dohyun-Im/dooi-ui)
- [npm Package](https://www.npmjs.com/package/dooi-ui)

---

**Made with ❤️ for the MCP community**