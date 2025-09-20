import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

interface TemplateMeta {
  id: string;
  title: string;
  description: string;
  uses: Array<{ category: string; id: string }>;
  dependencies: {
    npm: string[];
    peer: string[];
  };
  patches?: {
    tailwindConfig?: string;
    globalsCss?: string;
  };
  imports: {
    page: string;
    mountPathHint: string;
  };
  version: string;
}

export async function getTemplate(templateId: string) {
  const templatePath = join('data/templates', templateId);
  const metaPath = join(templatePath, 'meta.json');
  
  try {
    // Read template metadata
    const metaContent = readFileSync(metaPath, 'utf-8');
    const meta: TemplateMeta = JSON.parse(metaContent);
    
    const files: Array<{ path: string; content: string }> = [];
    
    // Add template files
    const templateFiles = readdirSync(templatePath);
    for (const file of templateFiles) {
      if (file === 'meta.json') continue;
      
      const filePath = join(templatePath, file);
      const content = readFileSync(filePath, 'utf-8');
      files.push({
        path: `templates/${templateId}/${file}`,
        content
      });
    }
    
    // Add used components
    for (const use of meta.uses) {
      const componentPath = join('data/components', use.category, `${use.id}.tsx`);
      try {
        const content = readFileSync(componentPath, 'utf-8');
        files.push({
          path: `components/${use.category}/${use.id}.tsx`,
          content
        });
      } catch (error) {
        console.warn(`Component ${use.category}/${use.id} not found`);
      }
    }
    
    return {
      content: [
        {
          type: 'text',
          text: `Template: ${meta.title}\nDescription: ${meta.description}\nVersion: ${meta.version}\n\nFiles included:\n${files.map(f => `- ${f.path}`).join('\n')}`,
        },
        ...files.map(file => ({
          type: 'text' as const,
          text: `\n\n--- FILE: ${file.path} ---\n\n${file.content}`,
        })),
      ],
    };
  } catch (error) {
    throw new Error(`Template ${templateId} not found: ${error instanceof Error ? error.message : String(error)}`);
  }
}
