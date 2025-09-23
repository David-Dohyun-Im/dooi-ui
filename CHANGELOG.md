# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2025-01-01

### Added
- **Rich Metadata System**: Each component now includes detailed metadata with descriptions, tags, and dependencies
- **Enhanced CLI Experience**: Improved `list` command with categorized output and tag information
- **Component Relationships**: Track which components use other components via `uses` field in metadata
- **Detailed Dependency Information**: Automatic dependency detection and installation guides
- **Better Organization**: Components organized in individual directories with metadata files
- **Component Tags**: Searchable tags for better component discovery
- **Enhanced Help System**: More detailed component information in `get` command

### Changed
- **Directory Structure**: Components now live in individual directories with their own `meta.json` files
- **CLI Output**: Enhanced list command shows categories, descriptions, and tags
- **Dependency Management**: Moved from hardcoded dependencies to metadata-driven approach
- **Component Discovery**: Better categorization and organization of components

### Technical Details
- Updated `bin.js` to read metadata from individual component directories
- Added filtering for hidden files (`.DS_Store`, etc.)
- Enhanced error handling and file system operations
- Improved component relationship tracking

### Migration Notes
- Components are now organized in individual directories
- Each component has its own `meta.json` file with metadata
- The `data/index.json` file has been updated to reflect the new structure
- All existing functionality is preserved with enhanced features

## [0.1.0] - 2024-12-31

### Added
- Initial release of DooiUI
- Basic CLI functionality with `list` and `get` commands
- Curated React Three.js components
- Template system for complete page layouts
- Basic dependency management
