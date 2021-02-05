import * as React from 'react'
import clsx from 'clsx'
import { mapPropsToStyles } from '../utils/mapPropsToStyles'

interface StyledComponentProps {
  as?: string
  className?: string
  styles?: any
  styleProps?: any
}

const StyledComponent: React.FC<StyledComponentProps> = ({
  as = 'div',
  className,
  styles = {},
  styleProps,
  children,
  ...props
}) => {
  const classes = mapPropsToStyles(styleProps, styles)

  return React.createElement(as, { ...props, className: clsx(classes, className) }, children)
}

export default StyledComponent
