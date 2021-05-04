import { JSDOM } from 'jsdom';

const dom = new JSDOM();
const { window } = dom;
const { document } = window;

global.window = window;
global.document = document;

global.document.body.getBoundingClientRect = () => ({
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 900,
});

global.fetch = require('jest-fetch-mock');
