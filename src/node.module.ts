import { RootModule } from './client/root.module';
import { Root } from './client/root.component';
import { NgModule, Compiler, COMPILER_OPTIONS, CompilerFactory, Injectable, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { CookieModule, CookieService, CookieBackendService, CookieOptions } from 'ngx-cookie';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { CommonNodeModule } from './utils/index-node';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';

@Injectable()
export class RequestCookies {
    constructor(@Inject(REQUEST) private request: Request) {}

    get cookies() {
        return !!this.request.headers.cookie ? this.request.headers.cookie : null;
    }
}

export function getLRU() {
  return new Map();
}
export function getRequest() {
  return Zone.current.get('req') || {};
}
export function getResponse() {
  return Zone.current.get('res') || {};
}

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
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
    CookieModule.forRoot(),
    CommonNodeModule
  ],
  providers: [
    { provide: 'req', useFactory: RequestCookies },
    { provide: 'res', useFactory: getResponse },

    { provide: 'LRU', useFactory: getLRU, deps: [] },
    { provide: CookieService, useClass: CookieBackendService },
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]}
  ]
})
export class MainModule {
  constructor() {
  }
}
