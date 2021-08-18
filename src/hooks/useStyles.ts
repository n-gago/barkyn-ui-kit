/* eslint-disable no-use-before-define */
import { useEffect, useMemo } from 'react'
import { getNodeIdentifier, compileInitialClasseNames } from '../utils'
import {
  Styles,
  ParserReplacer,
  StylePropertyParser,
  Classes,
  Stylesheet
} from '../types'

export interface Options {
  parser?: StylePropertyParser
}

const DEFAULT_PARSER: StylePropertyParser = {
  matcher: /[A-Z]/,
  replacer: (match: string) => `-${match.toLowerCase()}`
}

export const useStyles = <T>(
  styleSheet: Stylesheet<T>,
  options?: Options
): Classes<T> => {
  const classes = useMemo<Classes<T>>(
    () => compileInitialClasseNames(styleSheet),
    []
  )

  const appendStyle = (id: string, css: string) => {
    if (!document.head.querySelector('#' + id)) {
      const node = document.createElement('style')
      node.textContent = css
      node.type = 'text/css'
      node.id = id

      document.head.appendChild(node)
    }
  }

  const removeStyle = (id: string) => {
    const element = document.head.querySelector('#' + id)
    if (element) {
      document.head.removeChild(element)
    }
  }

  const isDOMReady = (): boolean => {
    return (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined' &&
      !!document.head
    )
  }

  const createParser = (matcher: RegExp, replacer: ParserReplacer) => {
    const regex = RegExp(matcher, 'g')
    return (string: string) => {
      // * throw an error if not a string
      if (typeof string !== 'string') {
        throw new TypeError(
          `expected an argument of type string, but got ${typeof string}`
        )
      }

      if (!string.match(regex)) {
        return string
      }
      return string.replace(regex, replacer)
    }
  }

  const compileStyles = (
    styles: Styles,
    parser: (property: string) => string
  ) =>
    Object.keys(styles)
      .map((property) => `${parser(property)}: ${styles[property]}`)
      .join('\n')

  const compileStylesheet = (): string => {
    if (
      !styleSheet ||
      typeof styleSheet !== 'object' ||
      Array.isArray(styleSheet)
    ) {
      throw new TypeError(
        `expected an argument of type object, but got ${typeof styleSheet}`
      )
    }

    const parser = createParser(
      options?.parser?.matcher || DEFAULT_PARSER.matcher,
      options?.parser?.replacer || DEFAULT_PARSER.replacer
    )

    const classnames = Object.keys(styleSheet).reduce(
      (obj, classname) => ({
        ...obj,
        [classes[classname]]: compileStyles(styleSheet[classname], parser)
      }),
      {}
    )

    return Object.keys(classnames)
      .map((classname) => `.${classname}: {\n${classnames[classname]}\n}`)
      .join('\n')
  }

  useEffect(() => {
    const id = getNodeIdentifier()

    if (isDOMReady()) {
      const css = compileStylesheet()
      appendStyle(id, css)
    }

    return () => {
      removeStyle(id)
    }
  }, [])

  return classes
}
