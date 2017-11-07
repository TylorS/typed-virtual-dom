import { LinkType } from './common/LinkType'
import { HTMLElementProperties } from './HTMLElement'

export interface HTMLLinkElementProperties extends HTMLElementProperties {
  as?: string
  crossorigin?: 'anonymous' | 'use-credentials'
  disabled?: boolean
  href?: string
  hreflang?: string
  media?: string
  referrerpolicy?: ReferrerPolicy
  rel?: LinkType
  sizes?: 'any' | string
  title: string
  type: string
}
