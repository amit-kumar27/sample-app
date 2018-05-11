import { RootModule } from './client/root.module';
import { Root } from './client/root.component';
import { NgModule, Compiler, COMPILER_OPTIONS, CompilerFactory } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { IdlePreload, IdlePreloadModule } from '@angularclass/idle-preload';
import { CookieModule } from 'ngx-cookie';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { CommonBrowserModule } from './utils/index-browser';

// import * as LRU from 'modern-lru';

export function getLRU(lru?: any) {
  // use LRU for node
  // return lru || new LRU(10);
  return lru || new Map();
}
export function getRequest() {
  // the request object only lives on the server
  return { cookie: document.cookie };
}
export function getResponse() {
  // the response object is sent as the index.html and lives on the server
  return {};
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
    FormsModule,
    RouterModule,
    CookieModule.forRoot(),
    IdlePreloadModule.forRoot(),
    CommonBrowserModule
  ],
  providers: [

    { provide: 'req', useFactory: getRequest },
    { provide: 'res', useFactory: getResponse },

    { provide: 'LRU', useFactory: getLRU, deps: [] },
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]}
  ]
})
export class MainModule {

}