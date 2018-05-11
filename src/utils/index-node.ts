import { NgModule } from '@angular/core';

import {Cookie} from "./cookie";
import { CookieNode } from './node/cookie-node';

@NgModule({
  providers:[
    {provide:Cookie, useClass:CookieNode}
  ]
})
export class CommonNodeModule {

}