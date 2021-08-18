import React from 'react'
import classnames from 'classnames'

import { Color, Variants, Size } from '../types'
import './styles.css'

export interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * What type of button?
   */
  variant: `${Variants}`
  /**
   * What color to use?
   */
  color: `${Color}`
  /**
   * How large should the button be?
   */
  dimension: `${Size}`
  /**
   * Custom styles?
   */
  className?: string
}

export const Button = ({
  variant,
  color,
  dimension,
  className,
  ...props
}: IButton) => {
  const classes = classnames(
    'btn',
    {
      'btn--contained': variant === Variants.CONTAINED,
      'btn--outlined': variant === Variants.OUTLINED,
      'btn--text': variant === Variants.TEXT,
      'btn--icon': variant === Variants.ICON,
      'btn--default': color === Color.DEFAULT,
      'btn--primary': color === Color.PRIMARY,
      'btn--secondary': color === Color.SECONDARY,
      'btn--small': dimension === Size.SMALL,
      'btn--medium': dimension === Size.MEDIUM,
      'btn--large': dimension === Size.LARGE,
      'btn--disabled': props.disabled
    },
    className
  )

  return (
    <button
      type='button'
      tabIndex={props.disabled ? -1 : 0}
      aria-disabled={props.disabled}
      className={classes}
      {...props}
    >
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'contained',
  color: 'default',
  dimension: 'small'
}
