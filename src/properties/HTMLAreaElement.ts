import { HTMLHyperlinkElementUtils } from './common/HTMLHyperlinkElementUtils'
import { LinkType } from './common/LinkType'
import { HTMLElementProperties } from './HTMLElement'

export interface HTMLAreaElementProperties
  extends HTMLElementProperties,
    HTMLHyperlinkElementUtils {
  accessKey?: string
  alt?: string
  coords?: string
  download?: string
  hreflang?: string
  media?: string
  referrerPolicy?: ReferrerPolicy
  rel?: LinkType
  shape?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  type?: string
}
