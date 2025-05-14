import { exec } from 'child_process';
import { promisify } from 'util';
import puppeteer from 'puppeteer';

const execAsync = promisify(exec);

describe('NPM Scripts', () => {
  const scripts = ['clean', 'build', 'export', 'format']; // Exclude 'dev' as it's a long-running process

  scripts.forEach((script) => {
    it(
      `should run \"npm run ${script}\" successfully`,
      async () => {
        const { stdout, stderr } = await execAsync(`npm run ${script}`);
        console.log(stdout);
        console.error(stderr);
        // Allow warnings in stderr but fail on errors
        expect(stderr).not.toMatch(/Error/);
      },
      30000 // Set a timeout of 30 seconds for each test
    );
  });
});

describe('Dev Server', () => {
  let serverProcess: any;

  beforeAll((done) => {
    // Start the dev server
    serverProcess = exec('npm run dev', { cwd: process.cwd() });
    serverProcess.stdout.on('data', (data: string) => {
      if (data.includes('http://localhost:')) {
        done();
      }
    });
  });

  afterAll(() => {
    // Kill the dev server
    serverProcess.kill();
  });

  it('should load the app without client-side errors', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = 'http://localhost:5173'; // Replace with your dev server URL

    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto(url);
    expect(consoleErrors).toHaveLength(0);

    await browser.close();
  });
});
