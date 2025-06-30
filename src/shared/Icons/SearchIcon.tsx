import type { SVGProps } from 'react'

export const SearchIcon = ({
  color = '#f9f9f9',
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill={color}
      fillRule='evenodd'
      d='M11.47 22.95C3.13 22.95 0 20.34 0 11.47 0 2.6 3.13 0 11.47 0c8.35 0 11.48 2.6 11.48 11.47 0 8.87-3.13 11.48-11.48 11.48ZM3.99 19.1q1.92 1.85 7.48 1.85 5.56 0 7.48-1.85 2-1.93 2-7.63t-2-7.62Q17.03 2 11.47 2 5.91 2 3.99 3.85 2 5.77 2 11.47t1.99 7.63Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='m22.95 22.95-2.61-2.61'
    />
  </svg>
)
