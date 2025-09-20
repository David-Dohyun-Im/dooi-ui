import { readFileSync } from 'fs';
import { join } from 'path';

interface TemplateMeta {
  id: string;
  title: string;
  dependencies: {
    npm: string[];
    peer: string[];
  };
}

export async function installCommand(templateId: string) {
  try {
    const metaPath = join('data/templates', templateId, 'meta.json');
    const metaContent = readFileSync(metaPath, 'utf-8');
    const meta: TemplateMeta = JSON.parse(metaContent);
    
    const { npm, peer } = meta.dependencies;
    
    let commands: string[] = [];
    
    if (npm.length > 0) {
      commands.push(`npm install ${npm.join(' ')}`);
    }
    
    if (peer.length > 0) {
      commands.push(`# Peer dependencies (install if not already present):\nnpm install ${peer.join(' ')}`);
    }
    
    if (commands.length === 0) {
      commands.push('# No additional dependencies required');
    }
    
    return {
      content: [
        {
          type: 'text',
          text: `# Installation commands for template: ${meta.title}\n\n${commands.join('\n\n')}`,
        },
      ],
    };
  } catch (error) {
    throw new Error(`Template ${templateId} not found: ${error instanceof Error ? error.message : String(error)}`);
  }
}
