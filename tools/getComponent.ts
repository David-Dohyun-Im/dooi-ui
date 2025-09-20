import { readFileSync } from 'fs';
import { join } from 'path';

export async function getComponent(category: string, componentId: string) {
  const componentPath = join('data/components', category, `${componentId}.tsx`);
  
  try {
    const content = readFileSync(componentPath, 'utf-8');
    
    return {
      content: [
        {
          type: 'text',
          text: `Component: ${category}/${componentId}\nLicense: MIT\nVersion: 2025.01.01-1`,
        },
        {
          type: 'text',
          text: `\n\n--- FILE: components/${category}/${componentId}.tsx ---\n\n${content}`,
        },
      ],
    };
  } catch (error) {
    throw new Error(`Component ${category}/${componentId} not found: ${error instanceof Error ? error.message : String(error)}`);
  }
}
