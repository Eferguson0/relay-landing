import * as React from "react"

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="21"
      height="17"
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 17C16.0169 17 12.25 13 10.5 13C8.75 13 4.98305 17 0 17C4.80508 17 10.5 9.39688 10.5 0C10.5 9.39688 16.1949 17 21 17Z"
        fill="currentColor"
      />
    </svg>
  )
}