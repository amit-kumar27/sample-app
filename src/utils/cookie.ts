import {CookieOptions} from "ngx-cookie";
/**
 * Created by kuldeepkeshwar on 21/09/16.
 */

export abstract class Cookie{
  abstract get(key: string): string
  abstract put(key: string, value: string, options?: CookieOptions)
  abstract getAll(): Object
}