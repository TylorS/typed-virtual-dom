import { HTMLHyperlinkElementUtils } from './common/HTMLHyperlinkElementUtils'
import { HTMLElementProperties } from './HTMLElement'

export interface HTMLAnchorElementProperties
  extends HTMLElementProperties,
    HTMLHyperlinkElementUtils {
  download?: string
  hreflang?: string
  media?: string
  referrerPolicy?: ReferrerPolicy
  rel?: string
  tabIndex?: number
  target?: '_self' | '_blank' | '_parent' | '_top'
  type?: string
}
