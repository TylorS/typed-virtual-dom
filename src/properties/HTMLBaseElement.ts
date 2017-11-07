import { HTMLElementProperties } from './HTMLElement'

export interface HTMLBaseElementProperties extends HTMLElementProperties {
  href?: string,
  target?: '_self' | '_blank' | '_parent' | '_top'  
}
