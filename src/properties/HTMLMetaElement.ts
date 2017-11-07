import { HTMLElementProperties } from './HTMLElement'

export interface HTMLMetaElementProperties extends HTMLElementProperties {
  chartset?: 'UTF-8' | string
  content?: string
  httpEquiv?: 'content-language' | 'content-security-policy' | 'referesh'
  name?:
    | 'application-name'
    | 'author'
    | 'description'
    | 'generator'
    | 'keywords'
    | 'referrer'
    | 'creator'
    | 'googlebot'
    | 'publisher'
    | 'robots'
    | 'slurp'
    | 'viewport'
    | string
}
