#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function listTemplates() {
  try {
    const dataPath = path.join(__dirname, 'data');
    const components = [];
    const templates = [];
    
    // 컴포넌트 목록
    const componentsPath = path.join(dataPath, 'components');
    if (await exists(componentsPath)) {
      const categories = await fs.readdir(componentsPath);
      for (const category of categories) {
        const categoryPath = path.join(componentsPath, category);
        const files = await fs.readdir(categoryPath);
        for (const file of files) {
          if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            const name = path.basename(file, path.extname(file));
            components.push({ category, name, file });
          }
        }
      }
    }
    
    // 템플릿 목록
    const templatesPath = path.join(dataPath, 'templates');
    if (await exists(templatesPath)) {
      const templateDirs = await fs.readdir(templatesPath);
      for (const dir of templateDirs) {
        const metaPath = path.join(templatesPath, dir, 'meta.json');
        if (await exists(metaPath)) {
          const meta = JSON.parse(await fs.readFile(metaPath, 'utf8'));
          templates.push({ id: dir, ...meta });
        }
      }
    }
    
    console.log('🎨 DegasUI - Available Templates\n');
    
    if (components.length > 0) {
      console.log('📦 Components:');
      components.forEach(comp => {
        console.log(`  • ${comp.category}/${comp.name}`);
      });
      console.log('');
    }
    
    if (templates.length > 0) {
      console.log('🏗️ Templates:');
      templates.forEach(template => {
        console.log(`  • ${template.id}: ${template.title || template.description || 'No description'}`);
      });
      console.log('');
    }
    
    console.log('Usage:');
    console.log('  npx degasui list                    # List all templates');
    console.log('  npx degasui get <template-id>       # Get template files');
    console.log('  npx degasui get <category>/<name>   # Get component');
    
  } catch (error) {
    console.error('Error listing templates:', error.message);
    process.exit(1);
  }
}

async function getTemplate(templateId) {
  try {
    const dataPath = path.join(__dirname, 'data');
    
    // 템플릿인지 확인
    const templatePath = path.join(dataPath, 'templates', templateId);
    if (await exists(templatePath)) {
      console.log(`📄 Template: ${templateId}\n`);
      
      // meta.json 읽기
      const metaPath = path.join(templatePath, 'meta.json');
      if (await exists(metaPath)) {
        const meta = JSON.parse(await fs.readFile(metaPath, 'utf8'));
        
        // 기본 정보 출력
        console.log(`📋 ${meta.title || templateId}`);
        if (meta.description) {
          console.log(`📝 ${meta.description}\n`);
        }
        
        // 의존성 정보 출력
        if (meta.dependencies) {
          console.log('📦 Dependencies:');
          if (meta.dependencies.npm && meta.dependencies.npm.length > 0) {
            console.log(`  npm install ${meta.dependencies.npm.join(' ')}`);
          }
          if (meta.dependencies.peer && meta.dependencies.peer.length > 0) {
            console.log(`  Peer dependencies: ${meta.dependencies.peer.join(', ')}`);
          }
          console.log('');
        }
        
        // 사용되는 컴포넌트들
        if (meta.uses && meta.uses.length > 0) {
          console.log('🔗 Uses components:');
          meta.uses.forEach(use => {
            console.log(`  • ${use.category}/${use.id}`);
          });
          console.log('');
        }
        
        // 설치 가이드
        console.log('🚀 Installation Guide:');
        console.log('  1. Install dependencies:');
        if (meta.dependencies && meta.dependencies.npm) {
          console.log(`     npm install ${meta.dependencies.npm.join(' ')}`);
        }
        console.log('  2. Copy template files to your project');
        console.log('  3. Import and use in your code\n');
        
        // 파일 목록
        const files = await getAllFiles(templatePath);
        console.log('📁 Files:');
        files.forEach(file => {
          console.log(`  ${file}`);
        });
        
        return;
      }
    }
    
    // 컴포넌트인지 확인
    const [category, name] = templateId.split('/');
    if (category && name) {
      const componentPath = path.join(dataPath, 'components', category, `${name}.tsx`);
      if (await exists(componentPath)) {
        console.log(`🎨 Component: ${category}/${name}\n`);
        
        // 컴포넌트별 의존성 정보 (하드코딩된 매핑)
        const componentDeps = getComponentDependencies(category, name);
        if (componentDeps.npm.length > 0) {
          console.log('📦 Dependencies:');
          console.log(`  npm install ${componentDeps.npm.join(' ')}`);
          if (componentDeps.peer.length > 0) {
            console.log(`  Peer dependencies: ${componentDeps.peer.join(', ')}`);
          }
          console.log('');
        }
        
        console.log('🚀 Installation Guide:');
        if (componentDeps.npm.length > 0) {
          console.log('  1. Install dependencies:');
          console.log(`     npm install ${componentDeps.npm.join(' ')}`);
          console.log('  2. Copy component code to your project');
          console.log('  3. Import and use in your code\n');
        }
        
        const content = await fs.readFile(componentPath, 'utf8');
        console.log('📄 Component Code:');
        console.log(content);
        return;
      }
    }
    
    console.error(`Template not found: ${templateId}`);
    process.exit(1);
    
  } catch (error) {
    console.error('Error getting template:', error.message);
    process.exit(1);
  }
}

function getComponentDependencies(category, name) {
  // 컴포넌트별 의존성 매핑
  const deps = {
    'fluid-blob': {
      npm: ['three', '@react-three/fiber'],
      peer: ['react', 'react-dom']
    },
    'FluidBlobDemo': {
      npm: ['three', '@react-three/fiber'],
      peer: ['react', 'react-dom']
    },
    'shuffle-grid': {
      npm: ['framer-motion'],
      peer: ['react', 'react-dom']
    },
    'ShuffleGridDemo': {
      npm: ['framer-motion'],
      peer: ['react', 'react-dom']
    }
  };
  
  return deps[name] || { npm: [], peer: ['react', 'react-dom'] };
}

async function exists(path) {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

async function getAllFiles(dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subFiles = await getAllFiles(fullPath);
      files.push(...subFiles.map(f => path.join(entry.name, f)));
    } else {
      files.push(entry.name);
    }
  }
  
  return files;
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === 'list') {
    listTemplates();
  } else if (args[0] === 'get') {
    if (args.length < 2) {
      console.error('Usage: npx degasui get <template-id>');
      process.exit(1);
    }
    getTemplate(args[1]);
  } else if (args[0] === 'help' || args[0] === '--help' || args[0] === '-h') {
    console.log(`
🎨 DegasUI - Curated UI Component Templates

Usage:
  npx degasui list                    # List all available templates
  npx degasui get <template-id>       # Get template files
  npx degasui get <category>/<name>   # Get component
  npx degasui help                    # Show this help

Examples:
  # List all templates
  npx degasui list

  # Get a complete template
  npx degasui get landing-morphic

  # Get a specific component
  npx degasui get ui/fluid-blob

Available Templates:
  - fluid-blob: 3D animated blob with shader effects
  - shuffle-grid: Animated image grid with Framer Motion
  - landing-morphic: Complete landing page template

Repository: https://github.com/David-Dohyun-Im/DegasUI
`);
  } else {
    console.error(`Unknown command: ${args[0]}`);
    console.error('Run "npx degasui help" for usage information.');
    process.exit(1);
  }
}

main();
