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
    
    // 컴포넌트 목록 (메타데이터 기반)
    const componentsPath = path.join(dataPath, 'components');
    if (await exists(componentsPath)) {
      const categories = await fs.readdir(componentsPath);
      for (const category of categories) {
        // .DS_Store 등 숨김 파일 제외
        if (category.startsWith('.')) continue;
        
        const categoryPath = path.join(componentsPath, category);
        const stat = await fs.stat(categoryPath);
        if (!stat.isDirectory()) continue;
        
        const items = await fs.readdir(categoryPath);
        for (const item of items) {
          // .DS_Store 등 숨김 파일 제외
          if (item.startsWith('.')) continue;
          
          const itemPath = path.join(categoryPath, item);
          const itemStat = await fs.stat(itemPath);
          if (itemStat.isDirectory()) {
            const metaPath = path.join(itemPath, 'meta.json');
            if (await exists(metaPath)) {
              const meta = JSON.parse(await fs.readFile(metaPath, 'utf8'));
              components.push({ category, id: item, ...meta });
            }
          }
        }
      }
    }
    
    // 템플릿 목록
    const templatesPath = path.join(dataPath, 'templates');
    if (await exists(templatesPath)) {
      const templateDirs = await fs.readdir(templatesPath);
      for (const dir of templateDirs) {
        // .DS_Store 등 숨김 파일 제외
        if (dir.startsWith('.')) continue;
        
        const metaPath = path.join(templatesPath, dir, 'meta.json');
        if (await exists(metaPath)) {
          const meta = JSON.parse(await fs.readFile(metaPath, 'utf8'));
          templates.push({ id: dir, ...meta });
        }
      }
    }
    
    console.log('🎨 DooiUI - Available Templates\n');
    
    if (components.length > 0) {
      console.log('📦 Components:');
      
      // 카테고리별로 그룹화
      const groupedComponents = {};
      components.forEach(comp => {
        if (!groupedComponents[comp.category]) {
          groupedComponents[comp.category] = [];
        }
        groupedComponents[comp.category].push(comp);
      });
      
      // 카테고리별 출력
      Object.keys(groupedComponents).sort().forEach(category => {
        console.log(`\n  ${category}:`);
        groupedComponents[category].forEach(comp => {
          console.log(`    • ${comp.category}/${comp.id}: ${comp.description}`);
          if (comp.tags && comp.tags.length > 0) {
            console.log(`      Tags: ${comp.tags.join(', ')}`);
          }
        });
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
    console.log('  npx dooi-ui list                    # List all templates');
    console.log('  npx dooi-ui get <template-id>       # Get template files');
    console.log('  npx dooi-ui get <category>/<name>   # Get component');
    
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
        
        // 파일 목록 및 다운로드 옵션
        const files = await getAllFiles(templatePath);
        console.log('📁 Files:');
        files.forEach(file => {
          console.log(`  ${file}`);
        });
        console.log('');
        
        // 다운로드 옵션 제공
        console.log('💾 Download Options:');
        console.log('  --download or -d: Download files to current directory');
        console.log('  --output <dir> or -o <dir>: Download to specific directory');
        console.log('');
        
        // 명령행 인수 확인
        const args = process.argv.slice(2);
        const downloadIndex = args.findIndex(arg => arg === '--download' || arg === '-d');
        const outputIndex = args.findIndex(arg => arg === '--output' || arg === '-o');
        
        if (downloadIndex !== -1 || outputIndex !== -1) {
          const outputDir = outputIndex !== -1 && args[outputIndex + 1] 
            ? args[outputIndex + 1] 
            : process.cwd();
          
          console.log(`📥 Downloading files to: ${outputDir}`);
          await downloadTemplate(templatePath, outputDir, files);
        }
        
        return;
      }
    }
    
    // 컴포넌트인지 확인
    const [category, name] = templateId.split('/');
    if (category && name) {
      const componentDir = path.join(dataPath, 'components', category, name);
      const metaPath = path.join(componentDir, 'meta.json');
      
      if (await exists(componentDir) && await exists(metaPath)) {
        const meta = JSON.parse(await fs.readFile(metaPath, 'utf8'));
        console.log(`🎨 Component: ${category}/${name}\n`);
        
        // 메타데이터 정보 출력
        console.log(`📋 ${meta.title || name}`);
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
        
        console.log('🚀 Installation Guide:');
        if (meta.dependencies && meta.dependencies.npm) {
          console.log('  1. Install dependencies:');
          console.log(`     npm install ${meta.dependencies.npm.join(' ')}`);
          console.log('  2. Copy component code to your project');
          console.log('  3. Import and use in your code\n');
        }
        
        // 컴포넌트 파일들 읽기
        const files = await getAllFiles(componentDir);
        console.log('📁 Files:');
        files.forEach(file => {
          if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            console.log(`  ${file}`);
          }
        });
        console.log('');
        
        // 메인 컴포넌트 파일 내용 출력
        const mainFile = meta.files && meta.files[0] ? meta.files[0] : `${name}.tsx`;
        const mainFilePath = path.join(componentDir, mainFile);
        if (await exists(mainFilePath)) {
          const content = await fs.readFile(mainFilePath, 'utf8');
          console.log('📄 Component Code:');
          console.log(content);
        }
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

async function downloadTemplate(templatePath, outputDir, files) {
  try {
    // 출력 디렉토리 생성
    await fs.mkdir(outputDir, { recursive: true });
    
    // 각 파일 복사
    for (const file of files) {
      const sourcePath = path.join(templatePath, file);
      const destPath = path.join(outputDir, file);
      
      // 디렉토리 생성
      await fs.mkdir(path.dirname(destPath), { recursive: true });
      
      // 파일 복사
      await fs.copyFile(sourcePath, destPath);
      console.log(`  ✅ ${file}`);
    }
    
    console.log(`\n🎉 Template downloaded successfully to: ${outputDir}`);
    console.log('📝 Next steps:');
    console.log('  1. Install dependencies (see above)');
    console.log('  2. Import and use the components in your project');
    
  } catch (error) {
    console.error('❌ Error downloading template:', error.message);
    process.exit(1);
  }
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === 'list') {
    listTemplates();
  } else if (args[0] === 'get') {
    if (args.length < 2) {
      console.error('Usage: npx dooi-ui-ui get <template-id>');
      process.exit(1);
    }
    getTemplate(args[1]);
  } else if (args[0] === 'help' || args[0] === '--help' || args[0] === '-h') {
    console.log(`
🎨 DooiUI - Curated UI Component Templates

Usage:
  npx dooi-ui list                    # List all available templates
  npx dooi-ui get <template-id>       # Get template files
  npx dooi-ui get <template-id> --download  # Download template files
  npx dooi-ui get <template-id> -o <dir>    # Download to specific directory
  npx dooi-ui get <category>/<name>   # Get component
  npx dooi-ui help                    # Show this help

Examples:
  # List all templates
  npx dooi-ui list

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

Available Templates:
  - landing: Landing page with fluid blob hero
  - orbai: Complete page with navigation, hero, and quote sections
  - shuffle: Page with animated shuffle grid

Repository: https://github.com/David-Dohyun-Im/dooi-ui
`);
  } else {
    console.error(`Unknown command: ${args[0]}`);
    console.error('Run "npx dooi-ui help" for usage information.');
    process.exit(1);
  }
}

main();
