// MCP Server implementation for DegasUI
// Handles get_template, get_component, list_curated, install_command

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import { getTemplate } from './tools/getTemplate.js';
import { getComponent } from './tools/getComponent.js';
import { listCurated } from './tools/listCurated.js';
import { installCommand } from './tools/installCommand.js';

const server = new Server(
  {
    name: 'degasui-server',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'get_template',
        description: 'Get a complete template with all dependencies',
        inputSchema: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Template ID (e.g., "landing-morphic")',
            },
          },
          required: ['id'],
        },
      },
      {
        name: 'get_component',
        description: 'Get a single component file',
        inputSchema: {
          type: 'object',
          properties: {
            category: {
              type: 'string',
              description: 'Component category (ui, Hero, Nav, Footer)',
            },
            id: {
              type: 'string',
              description: 'Component ID (e.g., "fluid-blob")',
            },
          },
          required: ['category', 'id'],
        },
      },
      {
        name: 'list_curated',
        description: 'List all available components and templates',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'install_command',
        description: 'Generate installation command for dependencies',
        inputSchema: {
          type: 'object',
          properties: {
            template_id: {
              type: 'string',
              description: 'Template ID to get dependencies for',
            },
          },
          required: ['template_id'],
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'get_template':
        return await getTemplate(args.id);
      case 'get_component':
        return await getComponent(args.category, args.id);
      case 'list_curated':
        return await listCurated();
      case 'install_command':
        return await installCommand(args.template_id);
      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
    };
  }
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('DegasUI MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});
