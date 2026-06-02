// @ts-check
import { chromium, defineConfig, devices, expect } from '@playwright/test';
import { trace } from 'console';
import { TIMEOUT } from 'dns';
import { report } from 'process';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const  config = ({
  testDir: './tests',

  timeout: 30*1000,


  expect: {
    TIMEOUT: 50*1000
  },

  reporter : 'html',

  
  
  use: {
    
    browserName: 'chromium',
    headless: false,

    // screenshot 
    screenshot: 'on',
    trace: 'on',
  },

  

 
});
module.exports = config

