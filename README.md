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
# Get template information
npx dooi-ui get landing

# Download template files
npx dooi-ui get landing --download
npx dooi-ui get landing -d

# Download to specific directory
npx dooi-ui get landing -o ./my-project
npx dooi-ui get landing --output ./my-project

# Get a specific component
npx dooi-ui get ui/fluid-blob
```

## 📦 Available Templates

### Complete Templates
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
# Get template information only
npx dooi-ui get landing

# Download template files to current directory
npx dooi-ui get landing --download
npx dooi-ui get orbai -d
npx dooi-ui get shuffle --download

# Download to specific directory
npx dooi-ui get landing -o ./my-landing-page
npx dooi-ui get orbai --output ./my-orbai-site

# Get specific components
npx dooi-ui get ui/fluid-blob
npx dooi-ui get Hero/FluidBlobDemo
npx dooi-ui get Cards/ShuffleGridDemo
```

## 🔧 Commands

```bash
npx dooi-ui list                    # List all templates and components
npx dooi-ui get <template-id>       # Get template information
npx dooi-ui get <template-id> --download  # Download template files
npx dooi-ui get <template-id> -o <dir>    # Download to specific directory
npx dooi-ui get <category>/<name>   # Get individual component
npx dooi-ui help                    # Show help
```

### Examples

```bash
# List everything available
npx dooi-ui list

# Get template information
npx dooi-ui get landing

# Download templates
npx dooi-ui get landing --download
npx dooi-ui get orbai -d
npx dooi-ui get shuffle -o ./my-project

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

## ✨ Features

- **Rich Metadata System**: Each template includes detailed metadata with dependencies and descriptions
- **Enhanced CLI Experience**: Improved `list` command with categorized output
- **File Download Support**: Download templates directly to your project with `--download` flag
- **Flexible Output**: Download to current directory or specify custom directory with `-o` flag
- **Component Relationships**: Track which components use other components
- **Detailed Dependency Information**: Automatic dependency detection and installation guides
- **Better Organization**: Templates organized in individual directories with metadata files

## 💾 Download Options

### Basic Download
```bash
# Download to current directory
npx dooi-ui get landing --download
npx dooi-ui get landing -d
```

### Custom Directory
```bash
# Download to specific directory
npx dooi-ui get landing -o ./my-landing-page
npx dooi-ui get orbai --output ./my-orbai-site
```

### What Gets Downloaded
- **Template files**: Complete React components ready to use
- **Metadata files**: Dependencies and usage information
- **Installation guide**: Step-by-step setup instructions

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