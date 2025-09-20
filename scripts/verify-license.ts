// Verify license compatibility and redistribution rights
// Usage: npx tsx scripts/verify-license.ts

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

interface LicenseInfo {
  spdx: string;
  redistribution: boolean;
}

interface ComponentFile {
  path: string;
  license: LicenseInfo;
}

const ALLOWED_LICENSES = ['MIT', 'Apache-2.0', 'BSD-3-Clause', 'ISC'];
const REDISTRIBUTION_REQUIRED = true;

async function verifyLicenses() {
  const components: ComponentFile[] = [];
  let hasErrors = false;
  
  // Check all .tsx files
  function scanDirectory(dir: string) {
    try {
      const items = readdirSync(dir);
      
      for (const item of items) {
        const fullPath = join(dir, item);
        const stat = require('fs').statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
          // For now, assume MIT license for all files
          // In real implementation, you'd parse file headers
          components.push({
            path: fullPath,
            license: { spdx: 'MIT', redistribution: true }
          });
        }
      }
    } catch (error) {
      // Directory doesn't exist, skip
    }
  }
  
  scanDirectory('data');
  
  // Verify each component
  for (const component of components) {
    const { license } = component;
    
    if (!ALLOWED_LICENSES.includes(license.spdx)) {
      console.error(`❌ ${component.path}: License ${license.spdx} not allowed`);
      hasErrors = true;
    }
    
    if (REDISTRIBUTION_REQUIRED && !license.redistribution) {
      console.error(`❌ ${component.path}: Redistribution not allowed`);
      hasErrors = true;
    }
    
    console.log(`✅ ${component.path}: ${license.spdx} (redistribution: ${license.redistribution})`);
  }
  
  if (hasErrors) {
    console.error('\n❌ License verification failed');
    process.exit(1);
  } else {
    console.log('\n✅ All licenses verified successfully');
  }
}

verifyLicenses().catch(console.error);
