import clsx from 'clsx'

export const mapPropsToStyles = (props = {}, styles: any = {}) => {
  const mappedClassNames = Object.entries(props).reduce((mappedStyles, [prop, value]) => {
    let className

    switch (typeof value) {
      case 'boolean':
        className = prop
        break
      case 'string':
        className = `${prop}-${value}`
        break
      default:
        className = ''
    }

    if (className === '' || typeof styles[className] === 'undefined') {
      return mappedStyles
    } else {
      return { ...mappedStyles, [styles[className]]: true }
    }
  }, {})

  return clsx(styles.root, mappedClassNames)
}
