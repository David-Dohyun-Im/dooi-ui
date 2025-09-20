// Auto-generate data/index.json from components and templates
// Usage: npx tsx scripts/gen-index.ts

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface ComponentMeta {
  category: string;
  id: string;
  title: string;
  license: string;
  version: string;
}

interface TemplateMeta {
  id: string;
  title: string;
  license: string;
  version: string;
}

interface IndexData {
  components: ComponentMeta[];
  templates: TemplateMeta[];
  generatedAt: string;
}

async function generateIndex() {
  const components: ComponentMeta[] = [];
  const templates: TemplateMeta[] = [];
  
  // Scan components
  const componentCategories = ['ui', 'Hero', 'Nav', 'Footer'];
  
  for (const category of componentCategories) {
    const categoryPath = join('data/components', category);
    try {
      const files = readdirSync(categoryPath);
      const tsxFiles = files.filter(file => file.endsWith('.tsx'));
      
      for (const file of tsxFiles) {
        const id = file.replace('.tsx', '');
        components.push({
          category,
          id,
          title: `${category} - ${id}`,
          license: 'MIT',
          version: '2025.01.01-1'
        });
      }
    } catch (error) {
      console.log(`Category ${category} not found, skipping...`);
    }
  }
  
  // Scan templates
  const templatesPath = 'data/templates';
  try {
    const templateDirs = readdirSync(templatesPath);
    
    for (const templateDir of templateDirs) {
      const metaPath = join(templatesPath, templateDir, 'meta.json');
      try {
        const metaContent = readFileSync(metaPath, 'utf-8');
        const meta = JSON.parse(metaContent);
        
        templates.push({
          id: meta.id,
          title: meta.title,
          license: meta.license.spdx,
          version: meta.version
        });
      } catch (error) {
        console.log(`Template ${templateDir} has no meta.json, using defaults...`);
        templates.push({
          id: templateDir,
          title: `Template - ${templateDir}`,
          license: 'MIT',
          version: '2025.01.01-1'
        });
      }
    }
  } catch (error) {
    console.log('Templates directory not found');
  }
  
  const indexData: IndexData = {
    components,
    templates,
    generatedAt: new Date().toISOString()
  };
  
  writeFileSync('data/index.json', JSON.stringify(indexData, null, 2));
  console.log('Generated data/index.json');
}

generateIndex().catch(console.error);
