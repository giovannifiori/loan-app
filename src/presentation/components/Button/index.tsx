import React, { MouseEventHandler } from 'react'

import styles from './Button.module.css'

type ButtonProps = {
  children: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({ children, onClick, ...rest }: ButtonProps) {
  return (
    <button className={styles.container} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
