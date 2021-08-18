import { Stylesheet, Classes } from '../types'

const randomString = (length: number, base = 36) => {
  return '_' + Math.random().toString(base).substr(2, length)
}

const getNodeIdentifier = () => {
  const id = randomString(8)
  return 'useStyles__' + id
}

const compileInitialClasseNames = <T>(classes: Stylesheet<T>): Classes<T> => {
  return Object.keys(classes).reduce(
    (obj, className) => ({
      ...obj,
      [className]: getNodeIdentifier()
    }),
    {} as Classes<T>
  )
}

export { randomString, getNodeIdentifier, compileInitialClasseNames }
