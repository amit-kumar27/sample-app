import { Inject, Injectable } from '@angular/core';
import { Cookie } from "../cookie";
import { CookieOptions } from '../../model/cookie-options';

@Injectable()
export class CookieNode implements Cookie{
    private cookieStore = {};

    constructor(
        @Inject('req') private readonly req: any,
        @Inject('res') private readonly res: any
    ) {
        if (this.req !== null) {
            this.parseCookies(this.req.cookies);
        }
    }

    public parseCookies(cookies) {
        this.cookieStore = {};
        if (!!cookies === false) { return; }
        let cookiesArr = cookies.split(';');
        for (const cookie of cookiesArr) {
            const cookieArr = cookie.split('=');
            this.cookieStore[cookieArr[0]] = cookieArr[1];
        }
    }

    getAll(): Object{
        return this.cookieStore;
    }

    get(key: string) {
        return !!this.cookieStore[key] ? this.cookieStore[key] : null;
    }

    put(key: string, value: string, options?: CookieOptions) {
        this.cookieStore[key]=value;
        this.res.cookie(key,value,options);
    }

    remove(key: string, options?: CookieOptions): void {
        this.res.cookie(key,undefined);
    }
}