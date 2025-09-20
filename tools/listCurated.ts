import { readFileSync } from 'fs';
import { join } from 'path';

interface IndexData {
  components: Array<{
    category: string;
    id: string;
    title: string;
    license: string;
    version: string;
  }>;
  templates: Array<{
    id: string;
    title: string;
    license: string;
    version: string;
  }>;
  generatedAt: string;
}

export async function listCurated() {
  try {
    const indexPath = join('data', 'index.json');
    const indexContent = readFileSync(indexPath, 'utf-8');
    const index: IndexData = JSON.parse(indexContent);
    
    const componentsList = index.components.map(c => 
      `- ${c.category}/${c.id}: ${c.title} (${c.license}, v${c.version})`
    ).join('\n');
    
    const templatesList = index.templates.map(t => 
      `- ${t.id}: ${t.title} (${t.license}, v${t.version})`
    ).join('\n');
    
    return {
      content: [
        {
          type: 'text',
          text: `# DegasUI Components & Templates\n\n## Components (${index.components.length})\n\n${componentsList}\n\n## Templates (${index.templates.length})\n\n${templatesList}\n\n*Generated: ${index.generatedAt}*`,
        },
      ],
    };
  } catch (error) {
    throw new Error(`Failed to list curated content: ${error instanceof Error ? error.message : String(error)}`);
  }
}
