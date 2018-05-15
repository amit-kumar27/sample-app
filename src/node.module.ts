import { RootModule } from './client/root.module';
import { Root } from './client/root.component';
import { NgModule, Compiler, COMPILER_OPTIONS, CompilerFactory } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { ServerCookiesModule } from '@ngx-utils/cookies/server';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { CommonNodeModule } from './utils/index-node';



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
    ServerCookiesModule.forRoot(),
    CommonNodeModule
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
  constructor() {
  }
}
