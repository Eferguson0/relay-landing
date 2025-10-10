import * as React from "react"

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="728"
      height="728"
      viewBox="0 0 728 728"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="323" width="82" height="300" rx="41" fill="currentColor"/>
      <rect x="323" y="428" width="82" height="300" rx="41" fill="currentColor"/>
      <rect x="300" y="323" width="82" height="300" rx="41" transform="rotate(90 300 323)" fill="currentColor"/>
      <rect x="728" y="323" width="82" height="300" rx="41" transform="rotate(90 728 323)" fill="currentColor"/>
    </svg>
  )
}