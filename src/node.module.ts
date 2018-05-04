import { RootModule } from './client/root.module';
import { Root } from './client/root.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { CookieService, CookieBackendService } from 'ngx-cookie';

export function getLRU() {
  return new Map();
}
export function getRequest() {
  return Zone.current.get('req') || {};
}
export function getResponse() {
  return Zone.current.get('res') || {};
}

@NgModule({
  bootstrap: [ Root ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'sample-app' 
    }),
    ServerModule,
    FormsModule,
    RootModule,
    RouterModule.forRoot([], { useHash: false }),
  ],
  providers: [
    { provide: 'req', useFactory: getRequest },
    { provide: 'res', useFactory: getResponse },

    { provide: 'LRU', useFactory: getLRU, deps: [] },
    { provide: CookieService, useClass: CookieBackendService }
  ]
})
export class MainModule {
  constructor() {
  }
}
