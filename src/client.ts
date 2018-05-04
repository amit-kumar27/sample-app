// the polyfills must be the first thing imported
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'ts-helpers';

// Angular 2
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { bootloader } from '@angularclass/bootloader';

// enable prod for faster renders
// enableProdMode();

import { MainModule } from './browser.module';

export const platformRef = platformBrowser();
import "./static/styles/shell.css";
import "./static/styles/main.css";
// on document ready bootstrap Angular 2
export function main() {
  // Load fonts async
  // https://github.com/typekit/webfontloader#configuration

  return platformRef.bootstrapModule(MainModule);
}

// support async tag or hmr
bootloader(main);
