import { NgModule } from '@angular/core';

import {Cookie} from "./cookie";
import { CookieBrowser } from './browser/cookie-browser';
//import { RequestCookies } from './request-cookies';

@NgModule({
  providers:[
    //RequestCookies,
    {provide:Cookie, useClass:CookieBrowser}
  ]
})
export class CommonNodeModule {

}