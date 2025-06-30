import type React from 'react'
import s from './IconButton.module.scss'

type Props = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
export const IconButton = ({ children, ...props }: Props) => {
  return (
    <button {...props} className={s.button}>
      {children}
    </button>
  )
}
