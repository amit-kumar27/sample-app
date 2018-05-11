import { NgModule } from '@angular/core';

import {Cookie} from "./cookie";
import { CookieBrowser } from './browser/cookie-browser';

@NgModule({
  providers:[
    {provide:Cookie, useClass:CookieBrowser}
  ]
})
export class CommonBrowserModule {

}