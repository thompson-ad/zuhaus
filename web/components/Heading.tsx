import * as React from 'react'
import StyledComponent from './StyledComponent'
import styles from './Heading.module.css'

interface HeadingProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color?: 'light'
  size: 'display' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall'
  weight?: 'medium' | 'bold'
  className?: string
}

const Heading: React.FC<HeadingProps> = ({ as, color, size, weight, ...props }) => {
  return <StyledComponent as={as} styles={styles} styleProps={{ color, size, weight }} {...props} />
}

export default Heading
