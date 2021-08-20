export enum Color {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export enum Variants {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TEXT = 'text',
  ICON = 'icon'
}

export enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export interface Styles {
  color?: string
  backgroundColor?: string
}

type MatchReplacer = (match: string) => string
type ForceReplacer = () => string

export type ParserReplacer = MatchReplacer | ForceReplacer
export interface StylePropertyParser {
  matcher: RegExp
  replacer: ParserReplacer
}

export type Stylesheet<T> = {
  [Class in keyof T]: Styles
}

export type Classes<T> = {
  [Class in keyof T]: string
}
