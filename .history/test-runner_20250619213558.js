// Tableau LSP Test Runner
// This script runs the hover handler and document handling tests using VS Code's extension testing framework

const path = require('path');
const { runTests } = require('@vscode/test-electron');

async function main() {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname);

    // The path to the test script
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, 'test-hover-runner.js');

    // Path to test workspace
    const testWorkspacePath = path.resolve(__dirname);

    // Download VS Code, unzip it and run the integration test
    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: [testWorkspacePath]
    });
  } catch (err) {
    console.error('Failed to run tests:', err);
    process.exit(1);
  }
}

main();