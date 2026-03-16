#!/usr/bin/env node
/**
 * QuickBooks OAuth Authentication Server
 *
 * This script handles the OAuth 2.0 authentication flow for QuickBooks Online.
 * Run with: npm run auth
 */

import { quickbooksClient } from './clients/quickbooks-client.js';

async function main() {
  console.log('QuickBooks OAuth Authentication');
  console.log('===============================\n');
  console.log('Starting OAuth flow...');
  console.log('A browser window will open for you to authorize the application.\n');

  try {
    await quickbooksClient.authenticate();
    console.log('\n✓ Successfully authenticated with QuickBooks!');
    console.log('Tokens have been saved to your .env file.');
    process.exit(0);
  } catch (error) {
    console.error('\n✗ Authentication failed:', error);
    console.error('\nPlease check:');
    console.error('  1. Your QUICKBOOKS_CLIENT_ID is correct');
    console.error('  2. Your QUICKBOOKS_CLIENT_SECRET is correct');
    console.error('  3. Your redirect URI matches what is configured in the Intuit Developer Portal');
    console.error('  4. Port 8000 is available');
    process.exit(1);
  }
}

main();
