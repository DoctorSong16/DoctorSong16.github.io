import React from 'react'

type Props = {
    name: string
    year: number
}

export default function Footer(props: Props) {
  return (
    <footer className="bg-maize font-ibarraRealNova">
      <div className="max-w-screen-xl mx-auto p-4">
        <p className="text-smoky-black text-center">
          &copy; {props.year} {props.name} All rights reserved.
        </p>
      </div>
    </footer>
  )
}