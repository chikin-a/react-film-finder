import type React from 'react'
import s from './Button.module.scss'

type Props = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
export const Button = ({ children, ...props }: Props) => {
  return (
    <button {...props} className={s.button}>
      {children}
    </button>
  )
}
