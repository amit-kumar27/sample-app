
import { Optional, Injectable } from "@angular/core";
import { Cookie } from "../cookie";
import { CookiesOptions, CookiesService } from '@ngx-utils/cookies';

@Injectable()
export class CookieBrowser implements Cookie {
  constructor( 
    private _cookieService:CookiesService
  ) {}

  get(key: string): string { 
    return this._cookieService.get(key); 
  }

  getAll(): Object { 
    return this._cookieService.getAll(); 
  }

  put(key: string, value: string, options?: CookiesOptions) {
    this._cookieService.put(key, value, options); 
  }


  remove(key: string, options?: CookiesOptions): void {
    this._cookieService.remove(key, options); 
  }

  removeAll(): void {
    this._cookieService.removeAll(); 
  }
}