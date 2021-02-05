import * as React from 'react'
import StyledComponent from './StyledComponent'
import styles from './Text.module.css'

interface TextProps {
  color?: 'light'
  size?: 'large' | 'small'
  className?: string
}

const Text: React.FC<TextProps> = ({ color, size, ...props }) => {
  return <StyledComponent as="p" styles={styles} styleProps={{ color, size }} {...props} />
}

export default Text
