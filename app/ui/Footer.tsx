import React from 'react'

type Props = {
    name: string
    year: number
}

export default function Footer(props: Props) {
  return (
    <footer className="bg-background font-ibarraRealNova text-foreground">
      <div className="max-w-screen-xl mx-auto p-4">
        <p className="text-center">
          &copy; {props.year} {props.name}. all rights reserved.
        </p>
        {/* <p className="text-center">
          Made with ❤️ by Nextjs and Tailwindcss.
        </p> */}
      </div>
    </footer>
  )
}