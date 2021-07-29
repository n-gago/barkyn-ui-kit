import * as React from 'react'
import './styles.css'

export interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className='test'>Example Component: {text}</div>
}
