import { ElementProperties } from './Element'

export interface HTMLElementProperties extends ElementProperties {
  contentEditable?: boolean
  contextMenu?: HTMLMenuElement
  dir?: 'ltr' | 'rtl' | 'auto'
  draggable?: boolean
  hidden?: boolean
  lang?: string
  tabIndex?: number
  title?: string
}
