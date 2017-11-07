import { NodeProperties } from './Node'

export interface ElementProperties extends NodeProperties {
  className?: string
  id?: string
  innerHTML?: string
  outerHTML?: string
  scrollLeft?: number
  scrollTop?: number
}
