import { EncType } from './common/EncType'
import { HTMLElementProperties } from './HTMLElement'

export interface HTMLFormElementProperties extends HTMLElementProperties {
  name?: string
  method?: FormMethod | 'post' | 'get'
  target?: string
  action?: string
  encType?: EncType
  acceptCharset?: 'UNKNOWN' | string
}

export const enum FormMethod {
  POST = 'post',
  GET = 'get',
}
