import * as React from 'react'
import StyledComponent from './StyledComponent'
import styles from './CategoryLabel.module.css'

interface CategoryLabelProps {
  category: 'fitness' | 'mindfulness' | 'nutrition'
  className: string
}

const CategoryLabel: React.FC<CategoryLabelProps> = ({ category, ...props }) => {
  return <StyledComponent as="div" styles={styles} styleProps={{ category }} {...props} />
}

export default CategoryLabel
