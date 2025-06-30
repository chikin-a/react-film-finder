import type { SVGProps } from 'react'

export const PlusIcon = ({
  color = '#f9f9f9',
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 21 21.5'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={4}
      d='M10.5 2v17m0-8.5H19 2'
    />
  </svg>
)
