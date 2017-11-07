import { HTMLElementProperties } from './HTMLElement'

export interface HTMLStyleElementProperties extends HTMLElementProperties {
  type?: string,
  media?: string,
  nonce?: string,
  title?: string,
}
