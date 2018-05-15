import {CookiesOptions} from "@ngx-utils/cookies";
/**
 * Created by kuldeepkeshwar on 21/09/16.
 */

export abstract class Cookie{
  abstract get(key: string): string
  abstract put(key: string, value: string, options?: CookiesOptions)
  abstract getAll(): Object
}