import { EncType } from './common/EncType'
import { HTMLElementProperties } from './HTMLElement'
import { FormMethod } from './HTMLFormElement'

export interface HTMLButtonElementProperties extends HTMLElementProperties {
  accessKey?: string
  autofocus?: boolean
  disabled?: boolean
  formAction?: string
  formEncType?: EncType
  formMethod?: FormMethod | 'post' | 'get'
  formNoValidate?: boolean
  formTarget?: string
  name?: string
  tabIndex?: number
  type?: ButtonType | 'submit' | 'reset' | 'button'
  value?: string
}

export const enum ButtonType {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
}
